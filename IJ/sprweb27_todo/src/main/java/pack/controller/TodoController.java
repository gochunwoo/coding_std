package pack.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pack.model.TodoEntity;
import pack.model.TodoResponse;
import pack.model.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")  // 외부 도메인 허용 (CORS 해결용)
//  @CrossOrigin(origins = "*")  *은 모든 외부 도메인에서 이 API 호출 가능하다는 뜻
//  예를 들어, http://localhost:3000 (React) 같은 프론트엔드 앱에서
//  http://localhost:8080/todos 같은 백엔드 API를 호출할 수 있게 해줌
//  안 붙이면 브라우저에서 CORS 오류 발생 가능
@RequestMapping("/")
public class TodoController {
    private final TodoService service;

    @PostMapping  // POST 방식 요청 처리 (데이터 등록용)
    public ResponseEntity<TodoResponse> create(@RequestBody TodoRequest request) {
        System.out.println("create(insert)");
        //return null;

        if (ObjectUtils.isEmpty(request.getTitle())) {
            return ResponseEntity.badRequest().build(); // 에러가 있는 경우 에러코드 반환
        }

        if (ObjectUtils.isEmpty(request.getOrder())) request.setOrder(0); // Oder가 없는 경우 0으로 설정

        if (ObjectUtils.isEmpty(request.getCompleted())) request.setCompleted(false);  // completed가 없으면 기본값 false로 설정

        TodoEntity entity = service.add(request); // 서비스 호출하여 DB에 저장
        System.out.println("insert result : " + ResponseEntity.ok(new TodoResponse(entity)));
        return ResponseEntity.ok(new TodoResponse(entity));  // 저장된 결과를 JSON 형식으로 반환됨
    }

    @GetMapping//  할 일 전체 목록을 조회해서 JSON으로 반환하는 역할
    // 이 메서드는 클라이언트가 보낸 경로에서 id 값을 꺼내서
    // 그 id에 해당하는 할 일 하나를 찾아서 JSON으로 응답해줌
    public ResponseEntity<List<TodoResponse>> readAll() {
        System.out.println("readAll");
        //return null;
        List<TodoEntity> list = service.searchAll();
        // Entity를 DTO로 변환
        List<TodoResponse> responses = list.stream().map(TodoResponse::new).collect(Collectors.toList());
        // new는 new todoResponse(todoEntity) 를 의미
        System.out.println("readAll result : " + ResponseEntity.ok(responses));
        return ResponseEntity.ok(responses);
    }

    @GetMapping(value = "{id}")//  할 일 전체 목록을 조회해서 JSON으로 반환하는 역할
    public ResponseEntity<TodoResponse> readOne(@PathVariable(name = "id") Integer id) {
        System.out.println("readAll");
        TodoEntity entity = service.searchById(id);
        return ResponseEntity.ok(new TodoResponse(entity));
    }

    @PatchMapping("{id}")   // 하일 수정
    public ResponseEntity<TodoEntity> update(@PathVariable(name = "id") Integer id, @RequestBody TodoRequest request) {
        System.out.println("update");
        TodoEntity entity = service.updateById(id, request);
        return ResponseEntity.ok(entity);
    }

    @DeleteMapping("{id}")   // 부분 삭제
    public ResponseEntity<?> deleteOne(@PathVariable(name = "id") Integer id) {
        System.out.println("delete");
        service.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping  // 전체삭제
    public ResponseEntity<?> deleteAll() {
        System.out.println("deleteAll");
        // return null;
        service.deleteAll();
        System.out.println("deleteAll : " + ResponseEntity.ok());
        return ResponseEntity.ok().build(); // 200 ok만 반환. 처리 성공만 알림
    }
}
