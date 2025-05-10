package pack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pack.entity.Jikwon;

public interface JikwonRepository extends JpaRepository<Jikwon, Integer> {
    //JPQL
//    @Query(value = "select j from Jikwon as j where jikwonno=?1")       // 위치 매핑
//    Jikwon jikwonLogin(String jikwonname);

    @Query(value = "select j from Jikwon as j where jikwonno=:jikwonno")  // 이름 매핑
    Jikwon jikwonLogin(@Param("jikwonno") String jikwonno);
}
