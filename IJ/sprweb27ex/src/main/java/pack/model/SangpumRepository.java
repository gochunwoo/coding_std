package pack.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SangpumRepository extends JpaRepository<Sangpum, Integer> {
	@Query("select s from Sangpum s where s.code=?1")
	Sangpum findByCode(int code);
}
