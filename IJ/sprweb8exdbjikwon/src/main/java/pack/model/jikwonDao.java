package pack.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

@Repository
public class jikwonDao {
    private Connection conn;
    private PreparedStatement pstmt;
    private ResultSet rs;

    @Autowired
    private MyDataSource dataSource;

    public jikwonDao() {

    }

    public ArrayList<jikwonDto> getJikwonData(String jikwonjik) {
        ArrayList<jikwonDto> list = new ArrayList<>();

        String sql = "";
        if( jikwonjik == null || jikwonjik.isEmpty() ) {
            sql = "select * from jikwon";
        } else {
            sql = "select * from jikwon where jikwonjik = ?";
        }
        try {
            conn = dataSource.getConnection();
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, jikwonjik);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                jikwonDto dto = new jikwonDto();
                dto.setJikwonno(rs.getString("jikwonno"));
                dto.setJikwonname(rs.getString("jikwonname"));
                dto.setJikwongen(rs.getString("jikwongen"));
                dto.setJikwonpay(rs.getString("jikwonpay"));
                list.add(dto);
            }
        } catch (Exception e) {
            System.out.println("getDataAll err : " + e.getMessage());
        } finally {
            try {
                if(rs != null) rs.close();
                if(pstmt != null) pstmt.close();
                if(conn != null) conn.close();
            } catch (Exception e2) {
                System.out.println("closing connection err : " + e2.getMessage());
            }
        }

        return list;
    }
}
