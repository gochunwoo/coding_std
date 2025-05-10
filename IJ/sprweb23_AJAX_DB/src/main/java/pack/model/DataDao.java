package pack.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class DataDao {
    @Autowired
    private DataRepository dataRepository;

    @Autowired
    private DataRepository2 dataRepository2;

    // 부서 자료 읽기
    public List<BuserDto> buserList() {
        List<BuserDto> blist = dataRepository.findAll().stream()
                .map(BuserDto::toDto)
                .collect(Collectors.toList());
        return blist;
    }

    // 직원 자료 읽기
    public List<JikwonDto> jikwonList(int buserno) {
//        List<JikwonDto> jlist = new ArrayList<JikwonDto>();
//        //방법1 : 향상된 for
//        for (Jikwon jikwon : dataRepository2.buserDatas(buserno)) {
//            jlist.add(JikwonDto.toDto(jikwon));
//        }
//
         // 방법2 : lambda 사용
        List<JikwonDto> jlist = dataRepository2.buserDatas(buserno)
                .stream()
                .map(JikwonDto::toDto)
                .collect(Collectors.toList());
        return jlist;
    }
}