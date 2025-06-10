package pack.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import pack.dto.MemDto;

@Repository
public class MemDao {

    @Autowired
    private SqlSession session;

    private static final String NAMESPACE = "member.";  // memberMapper.xml의 namespace="member"

    // 전체 자료 읽기
    public List<MemDto> getList() {
        return session.selectList(NAMESPACE + "getlist");
    }

    // 단건 조회
    public MemDto getData(int num) {
        return session.selectOne(NAMESPACE + "getData", num);
    }

    // 삽입
    public int insert(MemDto dto) {
        return session.insert(NAMESPACE + "insert", dto);
    }

    // 수정
    public int update(MemDto dto) {
        return session.update(NAMESPACE + "update", dto);
    }

    // 삭제
    public int delete(int num) {
        return session.delete(NAMESPACE + "delete", num);
    }
}
