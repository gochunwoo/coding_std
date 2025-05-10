package pack.model;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import pack.controller.BoardBean;


@Repository
public class BoardDaoProcess {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private BoardRepository repository;

    public Page<Board> listAll(int page){ // 전체 자료 읽기
    	// 둘 다 내림차수
        // List<Board> list = repository.findAll(Sort.by(Sort.Order.desc("gnum"),Sort.Order.asc("onum")));
        // List<Board> list = repository.findAll(Sort.by(Sort.Direction.DESC, "gnum","onum"));
        // List<Board> list = repository.findAll(Sort.by(Sort.Order.desc("gnum"), Sort.Order.asc("onum")));
        
    	Sort sort = Sort.by(Sort.Order.desc("gnum"), Sort.Order.asc("onum"));
        Pageable paging = PageRequest.of(page, 10, sort);
        Page<Board> list = repository.findAll(paging);
        
        
        // JPA는 0-based 인덱스를 반환하므로 +1을 줌
        System.out.println("page number:" + list.getPageable().getPageNumber() + 1);
        System.out.println("page size:" + list.getSize());
        System.out.println("page pages:" + list.getTotalPages());
        System.out.println("page count:" + list.getTotalElements());
        System.out.println("next:" + list.nextPageable());
        
        logger.info("반환된 레코드 수: {}", list.getContent().size());
        
        return list;
    }
    
    public Page<Board> search(BoardBean bean){ // 검색용
    	Sort sort = Sort.by(Sort.Order.desc("gnum"), Sort.Order.asc("onum"));
        Pageable paging = PageRequest.of(0, 10, sort);
        Page<Board> slist = null;
        
        if(bean.getSearchName().equals("name")) {
        	slist = repository.searchLike1(paging, bean.getSearchValue());
        }else {
        	slist = repository.searchLike2(paging, bean.getSearchValue());
        }
        
        return slist;
    }
    
    public int currentMaxNum() { // 새 글 추가시 num 구하기
    	return repository.maxNum();
    }
    
    @Transactional
    public void insert(BoardBean bean) {
    		Board board = new Board();
    		board.setNum(bean.getNum());        // 게시물 번호
    		board.setName(bean.getName());     // 작성자 이름
    		board.setPass(bean.getPass());     // 비밀번호
    		board.setMail(bean.getMail());     // 이메일
    		board.setTitle(bean.getTitle());   // 제목
    		board.setCont(bean.getCont());     // 내용
    		board.setBip(bean.getBip());       // 작성자 IP
    		board.setBdate(bean.getBdate());   // 작성일자
    		board.setReadcnt(bean.getReadcnt()); // 조회수
    		board.setGnum(bean.getGnum());     // 그룹 번호
    		board.setOnum(bean.getOnum());     // 출력 순서
    		board.setNested(bean.getNested()); // 들여쓰기 단계
    		repository.save(board); // insert into ...
    }
    
    // 상세보기용 조회수 증가
    @Transactional
    public void updateReadCnt(int num) {
    	repository.updateReadCnt(num);
    }
    
    public Board detail(int num) { // 상세보기, 글수정, 댓글 등에서 사용
    	Optional<Board> board = repository.findById(num);
    	logger.info("board : {}", board.get()); // Optional ==> Board type으로 변환
    	
    	if(board.isPresent()) {
    		return board.get();
    	}else {
    		return new Board();
    	}
    }
    
    // 수정시 비밀번호 비교용
    public String selectPass(int num) {
    	return repository.selectPass(num);
    }
    
    // 수정 작업
    @Transactional
    public void update(BoardBean bean) {
    		Optional<Board> board = repository.findById(bean.getNum());
    		Board dto = board.get();
    		dto.setName(bean.getName());
    		dto.setMail(bean.getMail());
    		dto.setTitle(bean.getTitle());
    		dto.setCont(bean.getCont());
    		 //repository.save(dto); 생략가능
    }
    
    @Transactional
    public void delete(int num) {
    	repository.deleteById(num);
    }
    
    // 댓글처리
    @Transactional
    public void updateOnum(BoardBean bean) {
    	repository.updateOnum(bean.getGnum(), bean.getOnum());
    }
    
    @Transactional
    public void insertReply(BoardBean bean) {
    	Board board = new Board();
    	board.setNum(bean.getNum());        // 게시물 번호
		board.setName(bean.getName());     // 작성자 이름
		board.setPass(bean.getPass());     // 비밀번호
		board.setMail(bean.getMail());     // 이메일
		board.setTitle(bean.getTitle());   // 제목
		board.setCont(bean.getCont());     // 내용
		board.setBip(bean.getBip());       // 작성자 IP
		board.setBdate(bean.getBdate());   // 작성일자
		board.setReadcnt(bean.getReadcnt()); // 조회수
		board.setGnum(bean.getGnum());     // 그룹 번호
		board.setOnum(bean.getOnum());     // 출력 순서
		board.setNested(bean.getNested()); // 들여쓰기 단계
		repository.save(board);
    }
}
