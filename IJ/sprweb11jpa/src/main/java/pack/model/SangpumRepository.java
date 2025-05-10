package pack.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

// JpaRepository<엔티티명,엔티티의@ID필드타입>
public interface SangpumRepository extends JpaRepository<SangpumDto, Integer> {
    // Repository <- CRUDRepsoitory <- PagingAndSortingRepository <- JPARepository
    // Repository   가장 기본 구조
    // CrudRepository	CRUD 기능 (save, findById, delete 등)
    // PagingAndSortingRepository	페이징, 정렬 기능 추가
    // JpaRepository	위의 모든 기능 + JPA 특화 기능 추가 (flush, batch 등)
    
    // 검색용 메소드
    // 쿼리용 메소드 작성 규칙    : findBy 칼람명, readBy 칼럼명 , getBy칼럼명 ..
    //                        : findBy칼럼명1 and 칼럼명2, findBy 칼럼명10 and 칼럼명2
    //                      : findBy칼럼명1 and 칼럼명2GreaterThan값, findBy칼럼명2GreaterThanEqual값....
    List<SangpumDto> findBySangContaining(String svalue);    // 검색어가 포함된 : like '%검색어%'
    // select * from sangdata where sang like '%검색어%' 에 의해 검색된 결과가 list 타입으로 반환
    List<SangpumDto> findBySangStartingWith(String svalue);  // 검색어가 시작되는 : like '%검색어%'
    List<SangpumDto> findBySangEndingWith(String svalue);    // 검색어가 끝나는 : like '%검색어%'
/*
    JPQL(Java Persistence Query Language) 사용 - JPA 지원 메소드로 처리할 수 없는 경우사용하면 효과적
    JPA는 SQL을 추상화한 JPQL이라는 객체 지향 쿼리 언어를 제공한다.
    따라서 테이블을 대상으로 쿼리 하는 것이 아닌 엔티티 객체를 대상으로 쿼리한다.
    JPQL은 SQL을 추상화했기 때문에 특정 데이터베이스 SQL에 의존하지 않는 장점이 있다.
    JPQL은 SQL과 문법이 유사하며, SELECT, FROM, WHERE, GROUP BY, HAVING, JOIN을 지원한다.
    JPQL은 결국 SQL로 변환된다.
*/
    @Query(value = "select s from SangpumDto s where s.sang like %:svalue%") 
    List<SangpumDto> searchMyMethod(@Param("svalue") String svalue);    // @Param 사용

}

