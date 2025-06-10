package pack;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BuserRepository extends JpaRepository<Buser, Integer> {
    // 반환 타입을 DTO로 명확히 지정 (List<BuserJikwonGogekDto>)
// @Query 어노테이션 내부도 줄바꿈 + 들여쓰기
    @Query(
            "select new pack.BuserJikwonGogekDTO(" +
                    "   b.buserno, b.busername, b.buserloc, " +
                    "   j.jikwonno, j.jikwonname, j.jikwonjik, j.jikwonpay, " +
                    "   g.gogekno, g.gogekname, g.gogektel " +
                    ") " +
                    "from Buser b " +
                    "join b.jikwons j " +
                    "left join j.gogeks g"
    )
    List<BuserJikwonGogekDTO> findAllJoinedData();
    // left join 은 jikwons와 연관된 gogeks 데이터가 없더라도 Buser의 jikwons 자료를 가져온다
}
