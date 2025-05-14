<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    response.setContentType("text/html; charset=UTF-8");
    response.setCharacterEncoding("UTF-8");
%>

<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.PreparedStatement" %>
<%@ page import="java.sql.ResultSet" %>
{"items" : [
<%
Connection conn = null;
PreparedStatement pstmt = null;
ResultSet rs = null;
String result = "";

try{
   Class.forName("org.mariadb.jdbc.Driver");
    String url = "jdbc:mariadb://localhost:3306/test";
    conn = DriverManager.getConnection(url,"root","123");

    Thread.sleep(2000);

    pstmt = conn.prepareStatement("select * from sangdata");
    rs = pstmt.executeQuery();

    while (rs.next()) {
        result += "{";
        result += "\"id\":\"" + rs.getString("code") + "\",";
        result += "\"name\":\"" + rs.getString("sang") + "\",";
        result += "\"price\":\"" + (rs.getInt("su") * rs.getInt("dan")) + "\"";
        result += "},\n";
    }

    if(result.length() > 0){
       result = result.substring(0, result.length() - 2);
    }

    out.print(result);
}catch(Exception e){
   System.out.print("{\"error\":\"처리 오류 : " + e.getMessage() + "\"}");
}finally{
   try{
      if(rs != null) rs.close();
      if(pstmt != null) pstmt.close();
      if(conn != null) conn.close();
   }catch(Exception e2){}
}
%>
]}
