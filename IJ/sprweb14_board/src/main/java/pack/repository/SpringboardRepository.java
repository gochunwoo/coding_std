package pack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pack.model.Springboard;

public interface SpringboardRepository extends JpaRepository<Springboard, Integer> {
    // CRUD ( 목록, 저장, 수정, 삭제) 기본메소드 호출

}
