import type { CellSource } from "./scheduleRules";

export interface SmartScheduleOptions {
  nurses: string[];
  days: string[];
}

export function smartGenerateSchedule(
  options: SmartScheduleOptions,
  timeoutMs = 2000
): {
  schedule: string[][];
  cellSource: CellSource[][];
  success: boolean;
  message?: string;
} {
  const { nurses, days } = options;
  const N = nurses.length;
  const D = days.length;
  // const SHIFTS = ["-", "D", "E", "N"] as const;
  type ShiftType = "-" | "D" | "E" | "N";
  const SHIFT_LIMIT: Record<ShiftType, number> = { D: 3, E: 3, N: 2, "-": 2 };

  // 초기화
  const schedule: string[][] = Array.from({ length: N }, () =>
    Array(D).fill("")
  );
  const cellSource: CellSource[][] = Array.from({ length: N }, () =>
    Array(D).fill("auto")
  );

  // 점수 계산 함수
  function calculateScore(schedule: string[][]): number {
    let score = 0;
    // 1. 각 요일별 근무조 인원수 체크
    for (let j = 0; j < D; j++) {
      const counts: Record<ShiftType, number> = { D: 0, E: 0, N: 0, "-": 0 };
      for (let i = 0; i < N; i++) {
        const v = schedule[i][j] as ShiftType;
        counts[v]++;
      }
      score -= Math.abs(counts.D - SHIFT_LIMIT.D) * 10;
      score -= Math.abs(counts.E - SHIFT_LIMIT.E) * 10;
      score -= Math.abs(counts.N - SHIFT_LIMIT.N) * 10;
      score -= Math.abs(counts["-"] - SHIFT_LIMIT["-"]) * 10;
    }
    // 2. 개인별 근무 조건 체크
    for (let i = 0; i < N; i++) {
      const row = schedule[i];
      // (1) 주 2일 이상 오프(휴무) 보장
      for (let w = 0; w < D; w += 7) {
        const week = row.slice(w, w + 7);
        const offCount = week.filter((v) => v === "-").length;
        if (offCount < 2) score -= (2 - offCount) * 50; // 2일 미만이면 큰 감점
        else score += (offCount - 2) * 5; // 2일 이상이면 약간 가점
      }
      // (2) 야간근무(N) 한 주 2회 이하
      for (let w = 0; w < D; w += 7) {
        const week = row.slice(w, w + 7);
        const nCount = week.filter((v) => v === "N").length;
        if (nCount > 2) score -= (nCount - 2) * 30;
      }
      // (3) 최대 연속 근무일 5일 이내
      let cont = 0;
      for (let j = 0; j < D; j++) {
        if (row[j] !== "-") cont++;
        else cont = 0;
        if (cont > 5) score -= (cont - 5) * 20;
      }
      // (4) 야간근무 연속 3일 이내
      let contN = 0;
      for (let j = 0; j < D; j++) {
        if (row[j] === "N") contN++;
        else contN = 0;
        if (contN > 3) score -= (contN - 3) * 30;
      }
      // (5) 야간근무 후 오프 2일 이상 권장
      for (let j = 0; j < D; j++) {
        if (row[j] === "N") {
          // 다음날, 다다음날
          if (j + 1 < D && row[j + 1] !== "-") score -= 15;
          if (j + 2 < D && row[j + 2] !== "-") score -= 10;
        }
      }
    }
    return score;
  }

  // 1. 오프와 N을 먼저 공평하게 분배
  function assignFairly(type: ShiftType, count: number) {
    for (let i = 0; i < N; i++) {
      let assigned = 0;
      let tries = 0;
      while (assigned < count && tries < 100) {
        const day = Math.floor(Math.random() * D);
        if (schedule[i][day]) {
          tries++;
          continue;
        }
        if (day > 0 && schedule[i][day - 1] === type) {
          tries++;
          continue;
        }
        if (day < D - 1 && schedule[i][day + 1] === type) {
          tries++;
          continue;
        }
        schedule[i][day] = type;
        assigned++;
      }
    }
  }

  // 2. 남은 자리를 D/E로 랜덤하게 채움
  function fillRemaining() {
    for (let j = 0; j < D; j++) {
      const counts: Record<ShiftType, number> = { D: 0, E: 0, N: 0, "-": 0 };
      for (let i = 0; i < N; i++) {
        const v = schedule[i][j] || "";
        if (v === "D" || v === "E" || v === "N" || v === "-")
          counts[v as ShiftType]++;
      }
      const empty: number[] = [];
      for (let i = 0; i < N; i++) {
        if (!schedule[i][j]) empty.push(i);
      }
      let d = counts.D;
      for (const idx of empty) {
        if (d < SHIFT_LIMIT.D) {
          schedule[idx][j] = "D";
          d++;
        } else {
          schedule[idx][j] = "E";
        }
      }
    }
  }

  // 3. 여러 번 시도해서 최고 점수의 결과 반환
  let bestScore = -Infinity;
  let bestSchedule: string[][] = [];
  const start = Date.now();

  for (let tries = 0; tries < 50 && Date.now() - start < timeoutMs; tries++) {
    // 초기화
    for (let i = 0; i < N; i++) for (let j = 0; j < D; j++) schedule[i][j] = "";

    // 근무 배정
    assignFairly("-", SHIFT_LIMIT["-"]);
    assignFairly("N", SHIFT_LIMIT["N"]);
    fillRemaining();

    // 점수 계산
    const score = calculateScore(schedule);
    if (score > bestScore) {
      bestScore = score;
      bestSchedule = schedule.map((row) => [...row]);
    }
  }

  // 최고 점수의 결과 반환
  if (bestSchedule.length > 0) {
    for (let i = 0; i < N; i++)
      for (let j = 0; j < D; j++) {
        schedule[i][j] = bestSchedule[i][j];
        cellSource[i][j] = "auto";
      }
    return {
      schedule,
      cellSource,
      success: true,
      message: `최선의 근무표를 생성했습니다. (점수: ${bestScore})`,
    };
  } else {
    return {
      schedule: Array.from({ length: N }, () => Array(D).fill("-")),
      cellSource: Array.from({ length: N }, () => Array(D).fill("none")),
      success: false,
      message: "근무표를 생성하지 못했습니다. 다시 시도해주세요.",
    };
  }
}
