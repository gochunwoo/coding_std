package pack.model;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface DataMapperInterface {

    @Select("SELECT * FROM jikwon")
    List<JikwonDto> selectAll();

    @Select("SELECT * FROM jikwon WHERE jikwonjik LIKE CONCAT('%', #{searchValue}, '%')")
    List<JikwonDto> selectSearch(@Param("searchValue") String searchValue);
}
