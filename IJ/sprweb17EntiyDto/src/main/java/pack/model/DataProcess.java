package pack.model;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pack.controller.BuserBean;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class DataProcess {
    @Autowired
    private BuserCrudRepository repository;

    // 전체 자료 읽기
    public List<BuserDto> getDataAll() {
        List<Buser> list = repository.findAll();
        /*
        List<BuserDto> dtoList =  new ArrayList<BuserDto>();
        for (Buser buser : list){
           BuserDto dto = BuserDto.fromEntity(buser);
            dtoList.add(dto);
        }
        return dtoList; // 최종적으로 변환된 BuserDto를 저장한 리스트 컬렉션 반환
         */
        // 위코드를 stream을 사용하여 간결하게 작성
        return list.stream()
                .map(BuserDto::fromEntity)
                .collect(Collectors.toList()); // 스트림의 모든 요소를 리스트로 수집한 후 반환
    }

    // 자료추가
    @Transactional
    public String insert(BuserBean bean) {
        // 부서번호 중복확인
        Buser existingData = repository.findById(bean.getBuserno()).orElse(null);
        // orElse(null) : 자료가 없는 경우 null 반환

        if (existingData != null) {
            return "이미 등록된 번호입니다";
        }
        Buser buser = bean.toEntity(); // 폼빈자료를 엔티티로 넘겨줌
        repository.save(buser); // hibernate에 의해 insert 문이 수행
        return "success";
    }
}
