package pack.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface GogekRepository extends JpaRepository<Gogek, Integer>{
	
	@Query("select g from Gogek g where substring(g.gogekjumin, 8, 1) = '1' or substring(g.gogekjumin, 8, 1) = '3'")
	public List<Gogek> findMan();
	
	@Query("select g from Gogek g where substring(g.gogekjumin, 8, 1) = '2' or substring(g.gogekjumin, 8, 1) = '4'")
	public List<Gogek> findWoman();
}
