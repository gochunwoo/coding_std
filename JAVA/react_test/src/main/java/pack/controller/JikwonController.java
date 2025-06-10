package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pack.entity.Jikwon;
import pack.repository.JikwonRepository;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/jikwon")
public class JikwonController {

    @Autowired
    private JikwonRepository repo;

    // 1. 전체 직원 리스트 조회
    @GetMapping("")
    public List<Jikwon> all() {
        return repo.findAll();
    }
    // → 프론트에서 직원 목록을 조회할 때 호출

    @PostMapping("")
    public Jikwon create(@RequestBody Jikwon jikwon) {
        return repo.save(jikwon);
    }

    // 삭제
    @DeleteMapping("/{no}")
    public void delete(@PathVariable int no) {
        repo.deleteById(no);
    }

    // 2. 특정 직원 번호로 조회
    @GetMapping("/{no}")
    public Jikwon one(@PathVariable int no) {
        Optional<Jikwon> opt = repo.findById(no);
        return opt.orElse(null);
    }
    // → 사번 입력 후 "확인" 버튼에 사용

    // 3. 특정 직원 직급 수정 (PUT)
    @PutMapping("/{no}")
    public Jikwon updateJik(@PathVariable int no, @RequestBody Jikwon dto) {
        Optional<Jikwon> opt = repo.findById(no);
        if (opt.isPresent()) {
            Jikwon j = opt.get();
            j.setJikwonjik(dto.getJikwonjik()); // 직급만 수정
            return repo.save(j); // 저장 후 반환
        }
        return null;
    }
    // → "수정 확인" 버튼에 사용

    // 4. 성별 직원 목록 (남/여로 필터링)
    @GetMapping("/gender/{g}")
    public List<Jikwon> byGender(@PathVariable String g) {
        return repo.findByJikwongen(g);
    }
    // → 성별 직원 탭에서 남/여 버튼 클릭 시

    // 5. 성별별 평균 연봉
    @GetMapping("/gender/avgpay")
    public List<Object[]> avgPayByGender() {
        return repo.findAvgPayByGender();
    }
    // → 성별별 평균 연봉 표시용
}
