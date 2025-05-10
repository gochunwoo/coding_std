package pack.model;

import java.time.LocalDate;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class GogekDto {
	private int gogekno;
	private String gogekname, gogektel, gogekjumin, gogekgen, gogekage;
	
	
	public static GogekDto fromEntity(Gogek entity) {
	    String jumin = entity.getGogekjumin(); // 주민번호 예: "900101-1234567"
	    String gender = "";
	    String age = "";
		int genderCode = Integer.parseInt(jumin.substring(7,8));
		
		if(genderCode == 1 || genderCode == 3) {
			gender = "남";
		}else {
			gender = "여";
		}
		
		int birthYear = Integer.parseInt(jumin.substring(0, 2));
        if (genderCode == 1 || genderCode == 2) {
            birthYear += 1900;
        } else if (genderCode == 3 || genderCode == 4) {
            birthYear += 2000;
        }
        
        int currentYear = LocalDate.now().getYear();
        age = String.valueOf(currentYear - birthYear + 1);
        
        return GogekDto.builder()
				.gogekno(entity.getGogekno())
				.gogekname(entity.getGogekname())
				.gogektel(entity.getGogektel())
				.gogekjumin(entity.getGogekjumin())
				.gogekgen(gender)
				.gogekage(age)
				.build();
	}
}
