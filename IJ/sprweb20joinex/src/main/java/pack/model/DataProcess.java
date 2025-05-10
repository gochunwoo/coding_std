package pack.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class DataProcess {
    @Autowired
    private BuserRepository buserRepository;

    @Autowired
    private JikwonRepository jikwonRepository;

    @Autowired
    private GogekRepository gogekRepository;


    public List<Jikwon> getAllJikwon() {
        return jikwonRepository.findAll();
    }

    public List<Gogek> getGogekListByJikwon(int jikwonno) {
        /*
        Stream<Gogek> gogekStream = gogekRepository.findAll().stream();
        Stream<Gogek> filteredStream = gogekStream.filter(gogek -> gogek.getJikwon() != null && gogek.getJikwon().getJikwonno() == jikwonno);
        List<Gogek> resultList = filteredStream.collect(Collectors.toList());
        return resultList;
         */
        /*
        return gogekRepository.findAll()
                .stream()
                .filter(g -> g.getJikwon() != null && g.getJikwon().getJikwonno() == jikwonno)
                .toList();
         */
        return gogekRepository.findByJikwon_Jikwonno(jikwonno);
    }

}