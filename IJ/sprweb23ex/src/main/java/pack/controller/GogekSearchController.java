package pack.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pack.dto.GogekDto;
import pack.service.GogekSearchService;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class GogekSearchController {

    private final GogekSearchService service;

    @PostMapping("/gogeks")
    public List<GogekDto> find(@RequestBody Map<String, Object> body) {
        int no = (int) body.get("no");
        String name = (String) body.get("name");
        System.out.println("받은 번호: " + no + ", 이름: " + name);
        return service.findByJikwon(no, name);
    }
}
