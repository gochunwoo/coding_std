package pack.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pack.util.AgeCalculator;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GogekDto {
	private int gogekno;
	
	private int gogekdamsano, gogekage;
	private String gogekname,gogektel,gogekjumin;
	
	public Gogek toEntity() {
		return Gogek.builder()
				.gogekno(this.getGogekno())
				.gogekname(this.getGogekname())
				.gogektel(this.getGogektel())
				.gogekjumin(this.getGogekjumin())
				.gogekdamsano(this.getGogekdamsano())
				.build();
	}
	
	public static GogekDto fromEntity(Gogek entity) {
		return GogekDto.builder()
				.gogekno(entity.getGogekno())
				.gogekname(entity.getGogekname())
				.gogektel(entity.getGogektel())
				.gogekjumin(entity.getGogekjumin())
				.gogekdamsano(entity.getGogekdamsano())
				.gogekage(AgeCalculator.calculateAge(entity.getGogekjumin()))
				.build();
	}
}