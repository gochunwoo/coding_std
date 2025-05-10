package pack.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pack.dto.BoardDto;
import pack.service.BoardService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/boards")
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/list")
    public String showListPage(Model model) {
        model.addAttribute("boardList", boardService.getAllBoards());
        return "list"; // templates/board/list.html 경로와 연결
    }

    // 전체 글 목록
    @GetMapping
    public List<BoardDto> getAllBoards() {
        return boardService.getAllBoards();
    }

    // 글 등록
    @PostMapping
    public BoardDto createBoard(@RequestBody BoardDto dto) {
        return boardService.saveBoard(dto);
    }

    // 글 상세 조회
    @GetMapping("/{num}")
    public BoardDto getBoard(@PathVariable int num) {
        return boardService.getBoardById(num);
    }

    // 글 수정
    @PutMapping("/{num}")
    public BoardDto updateBoard(@PathVariable int num, @RequestBody BoardDto dto) {
        return boardService.updateBoard(num, dto);
    }

    // 글 삭제
    @DeleteMapping("/{num}")
    public boolean deleteBoard(@PathVariable int num) {
        return boardService.deleteBoard(num);
    }
}