package pack.model;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import pack.controller.MemBean;

@Mapper
public interface DataMapperInterface {
	@Select("select num,name,addr from mem")
	List<MemDto> selectAll(); // 접근지정자 전부 public
	
	@Select("select * from mem where num=#{num}")
	MemDto selectPart(String num);  // 접근지정자 전부 public
	
	@Insert("insert into mem values(#{num},#{name},#{addr})")
	int insertData(MemBean bean);
	
	@Update("update mem set name=#{name},addr=#{addr} where num=#{num}")
	int updateData(MemBean bean);
	
	@Delete("delete from mem where num=#{num}")
	int deleteData(String num);
	
}
