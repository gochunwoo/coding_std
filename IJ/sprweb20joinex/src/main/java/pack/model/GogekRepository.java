package pack.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GogekRepository extends JpaRepository<Gogek, Integer> {
        List<Gogek> findByJikwon_Jikwonno(int jikwonno);
}
