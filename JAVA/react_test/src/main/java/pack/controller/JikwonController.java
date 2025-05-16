package pack.controller;

import org.springframework.web.bind.annotation.*;
import pack.entity.Gogek;
import pack.entity.Jikwon;
import pack.repository.GogekRepository;
import pack.repository.JikwonRepository;

import java.util.List;

@RestController
@RequestMapping("/api/jikwon")
public class JikwonController {
    private final JikwonRepository repo;

    public JikwonController(JikwonRepository repo) {
        this.repo = repo;
    }

    // 전체 사원 조회
    @GetMapping
    public List<Jikwon> list() {
        return repo.findAll();
    }

    // 개별 사원 조회
    @GetMapping("/{jikwonno}")
    public Jikwon one(@PathVariable int jikwonno) {
        return repo.findById(jikwonno).orElse(null);
    }

    // 등록(추가)
    @PostMapping
    public Jikwon add(@RequestBody Jikwon jikwon) {
        return repo.save(jikwon);
    }

    // 수정
    @PutMapping("/{jikwonno}")
    public Jikwon edit(@PathVariable int jikwonno, @RequestBody Jikwon newJikwon) {
        return repo.findById(jikwonno).map(data -> {
            data.setJikwonname(newJikwon.getJikwonname());
            data.setBusernum(newJikwon.getBusernum());
            data.setJikwonjik(newJikwon.getJikwonjik());
            data.setJikwonpay(newJikwon.getJikwonpay());
            data.setJikwonibsail(newJikwon.getJikwonibsail());
            data.setJikwongen(newJikwon.getJikwongen());
            data.setJikwonrating(newJikwon.getJikwonrating());
            return repo.save(data);
        }).orElse(null);
    }

    // 사ㄱ제
    @DeleteMapping("/{jikwonno}")
    public void delete(@PathVariable int jikwonno) {
        repo.deleteById(jikwonno);
    }
}