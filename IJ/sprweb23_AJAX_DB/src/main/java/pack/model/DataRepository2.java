package pack.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DataRepository2 extends JpaRepository<Jikwon, Integer>{
    @Query("select j from Jikwon j where buser=?1")
    List<Jikwon> buserDatas(int buserno);
}
