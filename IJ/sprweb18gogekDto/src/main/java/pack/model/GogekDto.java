package pack.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GogekDto {
    private int gogekno;
    private String gogekname;
    private String gogektel;
    private String gender;
    private int age;

    public static GogekDto fromEntity(Gogek g) {
        // 성별
        String jumin = g.getGogekjumin();
        String gender = (jumin.charAt(7) == '1' || jumin.charAt(7) == '3') ? "남" : "여"; // 삼항연산사용

        // 나이
        int birthYear = Integer.parseInt(jumin.substring(0, 2));
        birthYear += (jumin.charAt(7) == '1' || jumin.charAt(7) == '2') ? 1900 : 2000;
        int age = java.time.LocalDate.now().getYear() - birthYear;

        return GogekDto.builder()
                .gogekno(g.getGogekno())
                .gogekname(g.getGogekname())
                .gogektel(g.getGogektel())
                .gender(gender)
                .age(age)
                .build();
    }
}
