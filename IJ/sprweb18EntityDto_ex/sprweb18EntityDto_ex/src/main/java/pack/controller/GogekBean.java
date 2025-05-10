package pack.controller;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import pack.model.Gogek;

@Getter
@Setter
@Builder
public class GogekBean {
	private int gogekno;
	private String gogekname, gogektel, gogekjumin;
	
	public Gogek toEntity() {
		return Gogek.builder()
				.gogekno(gogekno)
				.gogekname(gogekname)
				.gogektel(gogektel)
				.gogekjumin(gogekjumin)
				.build();
	}
}
