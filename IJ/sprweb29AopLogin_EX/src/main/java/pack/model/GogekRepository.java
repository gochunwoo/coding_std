package pack.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GogekRepository extends JpaRepository<Gogek, Integer> {
    Gogek findByGogeknoAndGogekname(int gogekno, String gogekname);
}
