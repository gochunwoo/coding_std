package pack.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import pack.dto.MemDto;
import pack.repository.MemDao;

/*
@Controller
public class MemController {
   @Autowired
   private MemDao memDao;

   @GetMapping("/members")
   public String list(Model model) {
      List<MemDto> list = memDao.getList();
      model.addAttribute("list", list); // thymeleaf에서 ${list}로 사용 가능
      return "list"; // templates/mem_list.html 로 이동
   }
}
*/

@RestController
public class MemController {
    @Autowired
    private MemDao memDao;

    // ✅ 전체 목록 조회 - GET /members
    @GetMapping("/members")
    public List<MemDto> list(Model model){
        // ✔ [GET] 모든 회원 리스트를 조회 (React에서 목록 출력용)
        return memDao.getList(); // 💡 JSON 배열로 자동 변환되어 응답됨
    }

    // ✅ 회원 추가 - POST /members
    @PostMapping("/members")
    public Map<String, Object> insert(@RequestBody MemDto dto){
        // ✔ [POST] 새로운 회원 정보를 추가 (React에서 등록폼 입력 후 제출)
        memDao.insert(dto);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("isSuccess", true); // ✔ 성공 여부 JSON으로 응답
        return map;
    }

    // ✅ 회원 1명 조회 - GET /members/{num}
    @GetMapping("/members/{num}")
    public MemDto listone(@PathVariable("num")int num){
        // ✔ [GET] 특정 회원 번호로 단일 회원 정보 조회 (React 상세보기, 수정 전용)
        return memDao.getData(num);
    }

    @PutMapping("members/{num}")
    public Map<String, Object> update(
            @PathVariable("num")int num,
            @RequestBody MemDto dto){
        // ✔ [PUT] 특정 회원 번호에 해당하는 정보를 수정 (React에서 수정 요청)
        dto.setNum(num); // ✔ URL의 회원 번호를 DTO에 셋팅
        memDao.update(dto); // ✔ DB에 업데이트 수행
        return Map.of("isSuccess", true); // ✔ 성공 여부 JSON 응답
    }

    @DeleteMapping("/members/{num}")
    public Map<String, Object> delete(@PathVariable("num")int num){
        // ✔ [DELETE] 특정 회원 번호의 회원을 삭제 (React에서 삭제 버튼 클릭 시)
        memDao.delete(num);
        return Map.of("isSuccess", true); // ✔ 성공 응답 반환
    }

}
