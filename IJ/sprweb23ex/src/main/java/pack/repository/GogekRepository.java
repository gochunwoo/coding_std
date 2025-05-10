package pack.repository;

import io.micrometer.observation.ObservationFilter;
import org.springframework.data.jpa.repository.JpaRepository;
import pack.entity.Gogek;

import java.util.List;
import java.util.Optional;

public interface GogekRepository extends JpaRepository<Gogek, Integer> {
    List<Gogek> findByJikwon_JikwonnoAndJikwon_Jikwonname(int no, String name);

}