package pack.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pack.controller.FormBean;

import java.util.List;

@Repository
public class DataDao {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private DataMapperInterface mapperInterface;

    public List<SangpumDto> getDataAll(){
        List<SangpumDto> list = mapperInterface.selectAll();
        return list;
    }

    public List<SangpumDto> getDataSearch(FormBean bean) {
        List<SangpumDto> list = mapperInterface.selectSearch(bean.getSearchValue());
        System.out.println("size : " + list.size());
        logger.info("size : " + list.size());
        return list;
    }
}
