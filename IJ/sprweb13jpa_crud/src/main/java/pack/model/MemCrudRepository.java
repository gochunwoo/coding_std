package pack.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MemCrudRepository extends JpaRepository<Mem, Integer> {
    // num 자동 증가 처리를 할 경우 Max 집계함수를 사용할 수는 없다. JPQL 필요
    // @Query(value = "select m from Mem where m.num=(select max(m2.num) from Mem m2)")
    // @Query(value = "select max(m.num) from Mem as m") // num의 최대값만 구하려는 JPQL 방식
    //@Query(value = "select max(num) from Mem", nativeQuery = true) // native SQL을 사용, DB에서 직접 SQL 문장을 실행
    //int findByMaxNum();
    
    // 레코드 1개 읽기 : JPQL
    @Query(value = "select m from Mem as m where m.num= ?1")
    Mem findByNum(String num);
}
