package pack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pack.model.TodoEntity;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, Integer> {

}
