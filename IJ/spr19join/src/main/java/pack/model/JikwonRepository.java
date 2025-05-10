package pack.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JikwonRepository extends JpaRepository<Jikwon, Integer> {
    // inner join
    @Query("select j from Jikwon as j join j.buser b")
    List<Jikwon> findAllWithBuser();

    // 조건부 조인 : 직원의 연봉이 5000이상
    @Query("select j from Jikwon j join j.buser b where j.jikwonpay >= 5000")
    List<Jikwon> findAllWithHighPay();

    // 조건부 조인 : 특정 부서명으로 조인
    @Query("select j from Jikwon j join j.buser b where b.busername = :busername")
    List<Jikwon> findAllBuserName(@Param("busername") String busername);


    // left join : jikwon은 모두 나오고 buser는 없는 경우 null
    @Query("select j from Jikwon j left join j.buser b")
    List<Jikwon> findAllWithLeftJoin();


    @Query("select j from Jikwon j right join j.buser b")
    List<Jikwon> findAllWithRightJoin();

    // fetch join join과 유사하나 JPA에서는 연관된 엔티티를 즉시 로딩할수 있도록 fetch 사용
    @Query("select j from Jikwon j join fetch j.buser b")
    List<Jikwon> findAllWithFetchJoin();

    // native query
    @Query(value = "select * from jikwon j join buser b on j,busernum=b.buserno", nativeQuery = true)
    List<Jikwon> findAllBuserNative();

    // subquery
    @Query("select j from Jikwon j where j.jikwonpay=(select max(j2.jikwonpay) from Jikwon j2)")
    List<Jikwon> findTopPaidJikwon();

    // 다중 조건 조인
    @Query("select j from Jikwon j join j.buser b where b.busername = :buserName and j.jikwonpay > :minpay")
    List<Jikwon> findJikwonByBuserNameAndMinpay(@Param("buserName") String buserName,@Param("minpay") String minpay);

}
