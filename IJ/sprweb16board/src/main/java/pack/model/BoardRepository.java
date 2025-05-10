package pack.model;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BoardRepository extends JpaRepository<Board, Integer>{
	// 전체 자료 읽기 (num 별 내림차순, 페이지 나누기)
	Page<Board> findByOrderByNumDesc(Pageable pageable);
	
	// 검색용 JPQL
	@Query("select b from Board b where b.name like %?1%") // name별 검색, 순서로 매핑
	Page<Board> searchLike1(Pageable pageable, String searchValue);
	
	@Query("select b from Board b where b.title like %:searchValue%") // title별 검색, 이름으로 매핑
	Page<Board> searchLike2(Pageable pageable, @Param("searchValue")String searchValue);
	
	// 추가용 가장 큰 num 읽기
	@Query("select max(b.num) from Board as b")
	int maxNum();
	
	// 조회수 증가
	@Modifying(clearAutomatically = true) // 영속성 컨텍스트의 1차 캐시를 비워주는 설정. select는 제외
	@Query(value = "update Board bo set bo.readcnt=bo.readcnt + 1 where bo.num=?1")
	void updateReadCnt(int num);
	
	// 비밀번호 얻기
	@Query("select b.pass from Board as b where b.num=?1")
	String selectPass(int num);
	
	// 댓글 처리에서 같은 그룹 내의 onum 갱신
	@Modifying(clearAutomatically = true)
    @Query(value = "update Board bo set bo.onum=bo.onum +1 where bo.gnum=?1 and bo.onum>=?2")
    void updateOnum(int gnum, int onum);
}
