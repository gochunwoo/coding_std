package pack.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pack.entity.Jikwon;
import pack.repository.BuserRepository;
import pack.repository.JikwonRepository;

import java.util.List;

@Repository
public class DataDao {
    @Autowired
    private JikwonRepository jikwonRepository;

    @Autowired
    private BuserRepository buserRepository;

    // 직원 자료 읽기
    public List<Jikwon> jikwonListAll(){
        List<Jikwon> list = jikwonRepository.findAll();

        return list;
    }

    // 직원 로그인 : JPQL 사용
//   public Jikwon jikwonLogin(String jikwonno) {
//      Jikwon jikwon = jikwonRepository.jikwonLogin(jikwonno);
//      return jikwon;
//   }

    // 직원 로그인 : 내장 메소드 사용
    public Jikwon jikwonLogin(String jikwonno) {
        //Optional<Jikwon> jdto = jikwonRepository.findById(Integer.valueOf(jikwonno));
        //Jikwon jikwon = jdto.get();

        Jikwon jikwon = jikwonRepository.findById(Integer.parseInt(jikwonno)).get();
        return jikwon;
    }
}
