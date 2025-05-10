package pack.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pack.dto.BoardDto;
import pack.model.Board;
import pack.model.BoardRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    // 전체목록 조회
    public List<BoardDto> getAllBoards() {
        return boardRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    // 글 작성
    public BoardDto saveBoard(BoardDto dto) {
        Board board = convertToEntity(dto);
        Board saved = boardRepository.save(board);
        return convertToDto(saved);
    }

    // 글 상세 조회
    public BoardDto getBoardById(int num) {
        Optional<Board> board = boardRepository.findById(num);
        return board.map(this::convertToDto).orElse(null);
    }

    // 글 수정
    public BoardDto updateBoard(int num, BoardDto dto) {
        Optional<Board> optional = boardRepository.findById(num);
        if (optional.isPresent()) {
            Board board = optional.get();
            board.setAuthor(dto.getAuthor());
            board.setTitle(dto.getTitle());
            board.setContent(dto.getContent());
            Board updated = boardRepository.save(board);
            return convertToDto(updated);
        }
        return null;
    }

    // 글 삭제
    public boolean deleteBoard(int num) {
        if (boardRepository.existsById(num)) {
            boardRepository.deleteById(num);
            return true;
        }
        return false;
    }

    // Entity → DTO 변환
    private BoardDto convertToDto(Board board) {
        return BoardDto.builder()
                .num(board.getNum())
                .author(board.getAuthor())
                .title(board.getTitle())
                .content(board.getContent())
                .readcnt(board.getReadcnt())
                .bwrite(board.getBwrite())
                .build();
    }

    // DTO → Entity 변환
    private Board convertToEntity(BoardDto dto) {
        return Board.builder()
                .num(dto.getNum())
                .author(dto.getAuthor())
                .title(dto.getTitle())
                .content(dto.getContent())
                .readcnt(dto.getReadcnt())
                .bwrite(dto.getBwrite())
                .build();
    }
}
