package pack.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JikwonRepository extends JpaRepository<JikwonDto, String> {

@Query("select s from JikwonDto s where s.jikwonjik like %:svalue%")
List<JikwonDto> searchMyMethod(@Param("svalue") String svalue);    // @Param 사용

}

