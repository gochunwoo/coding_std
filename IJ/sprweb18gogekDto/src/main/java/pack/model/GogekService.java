package pack.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GogekService {

    @Autowired
    private GogekRepository repository;

    public List<GogekDto> getAll(String gender) {
        return repository.findAll().stream()
                .map(GogekDto::fromEntity)
                .filter(dto -> gender.equals("전체") || dto.getGender().equals(gender))
                .collect(Collectors.toList());
//        List<Gogek> entityList = repository.findAll();
//        List<GogekDto> dtoList = new ArrayList<>();
//        for (Gogek g : entityList) {
//            GogekDto dto = GogekDto.fromEntity(g);
//            dtoList.add(dto);
//        }
//        List<GogekDto> filteredList = new ArrayList<>();
//        for (GogekDto dto : dtoList) {
//            if (gender.equals("전체") || dto.getGender().equals(gender)) {
//                filteredList.add(dto);
//            }
//        }
//        return filteredList;
    }
}
