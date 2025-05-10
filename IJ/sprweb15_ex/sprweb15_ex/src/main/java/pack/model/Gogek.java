package pack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="gogek")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Gogek {
	@Id
	private int gogekno;
	
	private int gogekdamsano;
	private String gogekname,gogektel,gogekjumin;
}