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

    public List<JikwonDto> getDataAll() {
        return mapperInterface.selectAll();
    }

    public List<JikwonDto> getDataSearch(FormBean bean) {
        List<JikwonDto> list = mapperInterface.selectSearch(bean.getSearchValue());
        logger.info("검색된 건수: " + list.size());
        return list;
    }
}
