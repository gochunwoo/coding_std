package pack.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pack.model.Springboard;
import pack.repository.SpringboardRepository;

import java.time.LocalDateTime;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@RequestMapping("/board") // 모든 URL은 /board로 시작
public class BoardController {

    private final SpringboardRepository repository; // 생성자 주입으로 자동 연결

    // 게시글 목록
    @GetMapping("/list")
    public String list(Model model) {
        model.addAttribute("list", repository.findAll());
        return "board/list";
    }

    // 글쓰기 폼 요청 (파라미터 필요 없음!)
    @GetMapping("/write")
    public String writeForm() {
        return "board/write";
    }

    // 글쓰기 처리 (입력된 값 자동 바인딩)
    @PostMapping("/write")
    public String write(@ModelAttribute Springboard board) {
        board.setBwrite(LocalDateTime.now()); // 작성 시간
        board.setReadcnt(0);                  // 조회수 초기값
        repository.save(board);              // 저장
        return "redirect:/board/list";       // 목록으로 이동
    }


    // 상세보기
    @GetMapping("/detail")
    public String detail(@RequestParam("num") int num, Model model) {
        Optional<Springboard> optional = repository.findById(num);
        if (optional.isPresent()) {
            Springboard board = optional.get();
            board.setReadcnt(board.getReadcnt() + 1); // 조회수 1 증가
            repository.save(board);                  // 변경 저장
            model.addAttribute("data", board);
            return "board/detail";
        } else {
            return "redirect:/board/list";
        }
    }

    // 수정 폼
    @GetMapping("/edit")
    public String editForm(@RequestParam("num") int num, Model model) {
        Springboard board = repository.findById(num).orElse(null);
        model.addAttribute("data", board);
        return "board/edit";
    }

    // 수정 처리
    @PostMapping("/edit")
    public String edit(@ModelAttribute Springboard board) {
        repository.save(board); // 수정 내용 저장
        return "redirect:/board/detail?num=" + board.getNum();
    }

    //  삭제 확인 페이지 보여주는 GET 요청 처리
    @GetMapping("/delete")
    public String deleteConfirm(@RequestParam("num") int num, Model model) {
        Springboard board = repository.findById(num).orElse(null);
        model.addAttribute("data", board);
        return "board/delete";
    }

    // 실제 삭제를 처리하는 POST 요청
    @PostMapping("/delete")
    public String deleteProc(@RequestParam("num") int num) {
        repository.deleteById(num);
        return "redirect:/board/list";
    }

}
