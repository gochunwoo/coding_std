package pack.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JikwonService {
    @Autowired
    private JikwonRepository jikwonRepository;

    // 전체 자료를 읽어 반환1 : List 사용
    public List<JikwonDto> getJikwonDatas(){
        /* List<Jikwon> jikwonList = jikwonRepository.findAllWithBuser(); // JPA 영역에서
        List<JikwonDto> jikwonDtoList = new ArrayList<JikwonDto>();
        for (Jikwon jikwon : jikwonList) {
            jikwonDtoList.add(JikwonDto.fromEntity(jikwon));
        }
            return jikwonDtoList;   // Jpa 영역  밖(비즈니스 로직 영역) 으로 반환
        */
        /*
            return jikwonRepository.findAllWithBuser()
                .stream()
                .map(jikwon -> JikwonDto.fromEntity(jikwon))
                .collect(Collectors.toList());
        */
            return jikwonRepository.findAllWithBuser()  // Jpa영역
                .stream()   // stream api를 사용
                .map(JikwonDto::fromEntity) // 스트림 처리 결과를 다시 리스트 등의 컬렉션으로 변환하는 최종연산
                .collect(Collectors.toList());  // 스트림 처리 결과를 다시 리스트 등의 컬렉션으로 변환하는 최종 연산
    }

    // 조건부 조인: 연봉
    public List<JikwonDto> getJikwonHighPay(){
        return jikwonRepository.findAllWithHighPay()  // Jpa영역
                .stream()
                .map(JikwonDto::fromEntity)
                .collect(Collectors.toList());
    }

    //조건부 조인: 이름
    public List<JikwonDto> getBuserName(String buserName) {
        return jikwonRepository.findAllBuserName(buserName)  // Jpa영역
                .stream()
                .map(JikwonDto::fromEntity)
                .collect(Collectors.toList());
    }

    // 서브쿼리 연봉이 가장큰 직원을 조회하는 서브쿼리
    public List<JikwonDto> getTopPaidJikwon() {
        return jikwonRepository.findTopPaidJikwon()
                .stream()
                .map(JikwonDto::fromEntity)
                .collect(Collectors.toList());
    }
}
