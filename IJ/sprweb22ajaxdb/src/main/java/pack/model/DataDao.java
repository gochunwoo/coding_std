package pack.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class DataDao {
    @Autowired
    private DataRepository dataRepository;

    public List<SangpumDto> getSangpumAll() {
//        List<SangpumDto> slist = dataRepository.findAll()
//                .stream()
//                .map(sangpum -> SangpumDto.builder()
//                        .code(sangpum.getCode())
//                        .sang(sangpum.getSang())
//                        .su(sangpum.getSu())
//                        .dan(sangpum.getDan())
//                        .build())
//                .collect(Collectors.toList());

        List<SangpumDto> slist = dataRepository.findAll()
                .stream()
                .map(SangpumDto::toDto)
                .collect(Collectors.toList());
        return slist;
    }


}
