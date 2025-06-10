package pack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pack.entity.Jikwon;

import java.util.List;

public interface JikwonRepository extends JpaRepository<Jikwon, Integer> {
    // 성별로 직원 조회
    List<Jikwon> findByJikwongen(String jikwongen);

    // 성별별 평균 연봉 (집계 쿼리)
    @Query("SELECT j.jikwongen, AVG(j.jikwonpay) FROM Jikwon j GROUP BY j.jikwongen")
    List<Object[]> findAvgPayByGender();
}
// JpaRepository가 CRUD 전부 자동으로 처리해줌
