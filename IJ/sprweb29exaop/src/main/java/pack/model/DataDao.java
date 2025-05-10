package pack.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DataDao {
    @Autowired
    private JikwonRepository jikwonRepository;

    @Autowired
    private GogekRepository gogekRepository;

    public List<Jikwon> findAll() {
        return jikwonRepository.findAll();
    }

    public Gogek findByGogekno(int gogekno) {
        return gogekRepository.findById(gogekno).get();
    }

    public Jikwon findByJikwonno(int jikwonno) {
        return jikwonRepository.findById(jikwonno).get();
    }
}
