package pack.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BoardDao {
    @Autowired
    private DataMapperInterface mapperInterface;

    public List<Board> list(){
        List<Board> list = null;
        try {
            list = mapperInterface.selectDataAll();
            System.out.println("DAO list size: " + list.size());
        }catch (Exception e){
            System.out.println(" List<Board> list() error" + e.getMessage());
        }

        return list;
    }
}
