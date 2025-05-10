package pack.model;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DataDao {
	@Autowired
	private GogekRepository repository;
	
	public List<GogekDto> getDataAll(){
		List<Gogek> list = repository.findAll();
		return list.stream().map(GogekDto::fromEntity).collect(Collectors.toList());
	}
	
	public List<GogekDto> getDataAll2(){
		List<Gogek> list = repository.findAll();
		List<GogekDto> dtoList = new ArrayList<GogekDto>();
		for(Gogek entity:list) {
			GogekDto dto = GogekDto.fromEntity(entity);
			dtoList.add(dto);
		}
		return dtoList;
	}
	
	public List<GogekDto> getDataMan(){
		List<Gogek> list = repository.findMan();
		return list.stream().map(GogekDto::fromEntity).collect(Collectors.toList());
	}
	
	public List<GogekDto> getDataWoman(){
		List<Gogek> list = repository.findWoman();
		return list.stream().map(GogekDto::fromEntity).collect(Collectors.toList());
	}
}
