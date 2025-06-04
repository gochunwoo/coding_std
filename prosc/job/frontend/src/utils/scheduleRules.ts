export type CellSource = "manual" | "auto" | "none";

export interface ScheduleOptions {
  nurses: string[];
  days: string[];
  baseSchedule: string[][];
  baseCellSource: CellSource[][];
}

// 규칙 체크 함수
export function isValidSchedule(schedule: string[][]): boolean {
  const N = schedule.length;
  const D = schedule[0].length;
  for (let i = 0; i < N; i++) {
    let offCount = 0;
    let nightCount = 0;
    let contWork = 0;
    let contNight = 0;
    for (let j = 0; j < D; j++) {
      if (schedule[i][j] === "-") offCount++;
      if (schedule[i][j] === "N") nightCount++;
      if (schedule[i][j] !== "-") contWork++;
      else contWork = 0;
      if (contWork > 5) return false;
      if (schedule[i][j] === "N") contNight++;
      else contNight = 0;
      if (contNight > 3) return false;
      if (j > 0 && schedule[i][j - 1] === "N" && schedule[i][j] !== "-")
        return false;
    }
    if (offCount < 2) return false;
    if (nightCount > 2) return false;
  }
  return true;
}

// 오프(휴무) 배정 함수
function assignOffDays(
  schedule: string[][],
  cellSource: CellSource[][],
  minOff: number
) {
  const N = schedule.length;
  const D = schedule[0].length;
  for (let i = 0; i < N; i++) {
    // 이미 수동 오프가 있으면 제외
    const offDays: number[] = [];
    for (let j = 0; j < D; j++) {
      if (cellSource[i][j] === "manual" && schedule[i][j] === "-")
        offDays.push(j);
    }
    // 부족하면 랜덤하게 오프 배정
    while (offDays.length < minOff) {
      const idx = Math.floor(Math.random() * D);
      if (schedule[i][idx] === "-" && cellSource[i][idx] !== "manual") continue;
      if (cellSource[i][idx] === "manual") continue;
      schedule[i][idx] = "-";
      cellSource[i][idx] = "auto";
      offDays.push(idx);
    }
  }
}

// 근무(D/E/N) 배정 함수
function assignShifts(
  schedule: string[][],
  cellSource: CellSource[][],
  nurses: string[],
  days: string[]
) {
  const N = nurses.length;
  const D = days.length;
  for (let j = 0; j < D; j++) {
    let d = 0,
      e = 0,
      n = 0;
    for (let i = 0; i < N; i++) {
      if (schedule[i][j] === "D") d++;
      if (schedule[i][j] === "E") e++;
      if (schedule[i][j] === "N") n++;
    }
    const empty: number[] = [];
    for (let i = 0; i < N; i++) {
      if (schedule[i][j] === "-" && cellSource[i][j] !== "manual")
        empty.push(i);
    }
    for (let k = empty.length - 1; k > 0; k--) {
      const l = Math.floor(Math.random() * (k + 1));
      [empty[k], empty[l]] = [empty[l], empty[k]];
    }
    for (const idx of empty) {
      if (d < 3) {
        schedule[idx][j] = "D";
        cellSource[idx][j] = "auto";
        d++;
      } else if (e < 3) {
        schedule[idx][j] = "E";
        cellSource[idx][j] = "auto";
        e++;
      } else if (n < 2) {
        schedule[idx][j] = "N";
        cellSource[idx][j] = "auto";
        n++;
      } else {
        schedule[idx][j] = "-";
        cellSource[idx][j] = "auto";
      }
    }
  }
}

// 메인 자동 배정 함수
export function generateSchedule(
  options: ScheduleOptions,
  maxTries = 20
): {
  schedule: string[][];
  cellSource: CellSource[][];
  success: boolean;
  message?: string;
} {
  const { nurses, days, baseSchedule, baseCellSource } = options;
  for (let tries = 0; tries < maxTries; tries++) {
    const schedule = baseSchedule.map((row) => [...row]);
    const cellSource = baseCellSource.map((row) => [...row]);
    assignOffDays(schedule, cellSource, 2);
    assignShifts(schedule, cellSource, nurses, days);
    if (isValidSchedule(schedule)) {
      return { schedule, cellSource, success: true };
    }
  }
  // 실패 시 빈 근무표 반환
  return {
    schedule: Array.from({ length: nurses.length }, () =>
      Array(days.length).fill("-")
    ),
    cellSource: Array.from({ length: nurses.length }, () =>
      Array(days.length).fill("none")
    ),
    success: false,
    message:
      "규칙을 만족하는 근무표를 찾지 못했습니다. 수동 입력을 줄이거나 규칙을 완화해 주세요.",
  };
}
