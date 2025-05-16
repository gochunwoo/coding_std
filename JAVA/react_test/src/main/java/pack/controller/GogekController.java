package pack.controller;

import org.springframework.web.bind.annotation.*;
import pack.entity.Gogek;
import pack.repository.GogekRepository;

import java.util.List;

@RestController
@RequestMapping("/api/gogek")
public class GogekController {
    private final GogekRepository repo;

    public GogekController(GogekRepository repo) {
        this.repo = repo;
    }

    // 전체 고객 조회
    @GetMapping
    public List<Gogek> getAll() {
        return repo.findAll();
    }

    // 고객 1명 상세 조회
    @GetMapping("/{gogekno}")
    public Gogek getOne(@PathVariable int gogekno) {
        return repo.findById(gogekno).orElse(null);
    }

    // 고객 등록
    @PostMapping
    public Gogek add(@RequestBody Gogek gogek) {
        return repo.save(gogek);
    }

    // 고객 수정
    @PutMapping("/{gogekno}")
    public Gogek update(@PathVariable int gogekno, @RequestBody Gogek gogek) {
        return repo.findById(gogekno).map(data -> {
            data.setGogekname(gogek.getGogekname());
            data.setGogektel(gogek.getGogektel());
            data.setGogekjumin(gogek.getGogekjumin());
            data.setGogekdamsano(gogek.getGogekdamsano());
            return repo.save(data);
        }).orElse(null);
    }

    // 고객 삭제
    @DeleteMapping("/{gogekno}")
    public void delete(@PathVariable int gogekno) {
        repo.deleteById(gogekno);
    }
}