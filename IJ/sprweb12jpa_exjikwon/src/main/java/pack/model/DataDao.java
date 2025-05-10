package pack.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DataDao { // 클라이언트 <-> DB 처리용 클래스 <-> JPA <-> JDBC <-> RDBMS
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private JikwonRepository repository;   //  변수 repository 로 JPA가 제공하는 모든 기본 기능을 이 변수 하나로 접근할 수 있음

    public List<JikwonDto> getDataAll() {
        List<JikwonDto> list = repository.findAll(); // 내장된 기본 메소드
        logger.info("행의 갯수" + list.size() + "개");
        return list;
    }

    // 검색 처리
    public List<JikwonDto> getDataSearch(String svalue) {

        List<JikwonDto> list = repository.searchMyMethod(svalue);
        logger.info("검색 결과 행의 갯수" + list.size() + "명");   // 인원 수 로그 출력
        return list;
    }
}
