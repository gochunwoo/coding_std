package pack.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import pack.dto.ProductDto;

@Repository
public class ProductProcess {

    @Autowired
    private SqlSession sqlSession; // mybatis sql 세션 주입

    // 전체 조회
    public List<ProductDto> getAll() {
        return sqlSession.selectList("product.getAll");
    }

    // 특정 상품 조회
    public ProductDto getData(String code) {
        return sqlSession.selectOne("product.getData", code);
    }

    // 상품 등록
    public void insert(ProductDto dto) {
        sqlSession.insert("product.insert", dto);
    }

    // 상품 수정
    public void update(ProductDto dto) {
        sqlSession.update("product.update", dto);
    }

    // 상품 삭제
    public void delete(String code) {
        sqlSession.delete("product.delete", code);
    }
}
