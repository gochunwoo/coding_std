package pack.controller;

import org.springframework.web.bind.annotation.*;
import pack.entity.Sangdata;
import pack.repository.SangdataRepository;

import java.util.List;

@RestController
@RequestMapping("/api/sangdata")
public class SangdataController {
    private final SangdataRepository repo;

    public SangdataController(SangdataRepository repo) {
        this.repo = repo;
    }

    // 전체 목록 조회
    @GetMapping
    public List<Sangdata> list() {
        return repo.findAll();
    }

    // 개별 조회
    @GetMapping("/{code}")
    public Sangdata one(@PathVariable int code) {
        return repo.findById(code).orElse(null);
    }

    // 등록(추가)
    @PostMapping
    public Sangdata add(@RequestBody Sangdata sangdata) {
        return repo.save(sangdata);
    }

    // 수정
    @PutMapping("/{code}")
    public Sangdata edit(@PathVariable int code, @RequestBody Sangdata newData) {
        return repo.findById(code).map(data -> {
            data.setSang(newData.getSang());
            data.setSu(newData.getSu());
            data.setDan(newData.getDan());
            return repo.save(data);
        }).orElse(null);
    }

    // 삭제
    @DeleteMapping("/{code}")
    public void delete(@PathVariable int code) {
        repo.deleteById(code);
    }
}