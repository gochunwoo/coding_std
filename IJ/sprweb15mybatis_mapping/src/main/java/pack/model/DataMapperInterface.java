package pack.model;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DataMapperInterface {
    // 추상메소드의 이름은 Mapper.xml의 id명과 일치
    List<Board> selectDataAll();
}
