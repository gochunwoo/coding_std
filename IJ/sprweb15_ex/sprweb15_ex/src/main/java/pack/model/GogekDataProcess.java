package pack.model;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class GogekDataProcess {
	@Autowired
	private GogekRepository repository;
	
	public List<GogekDto> getDataAll() {
        return repository.findAll().stream()
                .map(GogekDto::fromEntity)
                .collect(Collectors.toList());
    }      
}