package pack.controller;

import lombok.*;
import pack.model.Buser;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BuserBean {
    private int buserno;
    private String busername;
    private String buserloc;
    private String busertel;

    /*
    entity를 사용자에게 노출하면 원하지 않는 상황에서 자원의 속성이 변경될 가능성이 있다.
    그리고 엔티티를 UI계층에 노출하는 것은 테이블 설계를 화면에 공개하는 것이나 다름없기 때문에
    보안상으로도 바람직하지 못한 구조가 된다.
    그래서 Dto와 Entity의 차이로 인해 Dto와 Entity를 분리하는 것이 바람직
    그래서 FormBean의 Entity의 차이로 인해 FormBean과 Enity를 분리하는 것이 바람직
    */

    // BuserBean을 Buser 엔티티로 변환하는 메소드
    public Buser toEntity(){
        return Buser.builder()
                .buserno(this.buserno)
                .busername(this.busername)
                .buserloc(this.buserloc)
                .busertel(this.busertel)
                .build(); // 최종적으로 builder 객체에 설정된 값을 바탕으로 Buser 객체를 생성 후 반환
        // 단계별로 Buser(엔티티) 객체의 각 빌드를 설정할수 있다.
        // 빌더 패턴 장접 : 가독성, 유연성, 불변성
    }
}
