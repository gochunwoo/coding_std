package pack.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pack.dto.MemDto;
import pack.service.DataProcess;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class MemApiController {

    @Autowired
    private DataProcess dataProcess;

    @Operation(summary = "전체 회원 목록", description = "등록된 모든 회원 정보를 조회합니다")
    @GetMapping("/members")
    public List<MemDto> list() {
        return dataProcess.getDataAll(); // 이게 /api/members로 동작함
    }

    @Operation(summary = "회원 수정", description = "회원 번호와 수정할 이름/주소를 받아 해당 회원 정보를 수정합니다.")
    @PutMapping("/members")
    public Map<String, Object> updateProcess(@RequestBody MemBean bean) {
        String result = dataProcess.update(bean);
        Map<String, Object> response = new HashMap<>();
        response.put("isSuccess", result.equals("success"));
        response.put("message", result);

        return response;
    }

    @Operation(summary = "회원 등록", description = "번호, 이름, 주소를 받아 새 회원을 등록합니다.")
    @PostMapping("/members")
    public Map<String, Object> insert(@RequestBody MemBean bean) {
        String result = dataProcess.insert(bean);

        Map<String, Object> response = new HashMap<>();
        response.put("isSuccess", result.equals("success"));
        response.put("message", result);
        return response;
    }

    @Operation(summary = "회원 삭제", description = "회원 번호를 받아 해당 회원을 삭제합니다.")
    @DeleteMapping("/members/{num}")
    public Map<String, Object> delete(@PathVariable int num) {
        String result = dataProcess.delete(num);

        Map<String, Object> response = new HashMap<>();
        response.put("isSuccess", result.equals("success"));
        response.put("message", result);
        return response;
    }

}