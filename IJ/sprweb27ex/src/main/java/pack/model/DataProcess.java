package pack.model;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import pack.controller.SangpumBean;

@Repository
public class DataProcess {

    @Autowired
    private SangpumRepository repository;

    // 목록 조회
    public List<Sangpum> getDataAll() {
        return repository.findAll();
    }

   
    public Sangpum getData(int code) {
        Sangpum sangpum = repository.findByCode(code);
        return sangpum;
    }

    // 추가
    @Transactional
    public String insert(SangpumBean bean) {
        System.out.println("insert 호출됨: " + bean);
        System.out.println("입력 code 값: " + bean.getCode());

        if (bean.getCode() == 0 ||
            bean.getSang() == null || bean.getSang().isEmpty() ||
            bean.getSu() == null || bean.getSu().isEmpty() ||
            bean.getDan() == null || bean.getDan().isEmpty()) {
            return "필수값이 비어있습니다.";
        }

        // su, dan이 숫자 형식인지 검증
        try {
            Integer.parseInt(bean.getSu());
            Integer.parseInt(bean.getDan());
        } catch (NumberFormatException e) {
            return "수량과 단가는 숫자 형식이어야 합니다.";
        }

        Optional<Sangpum> existing = Optional.ofNullable(repository.findByCode(bean.getCode()));
        if (existing.isPresent()) {
            return "이미 등록된 코드입니다.";
        }

        try {
            Sangpum sangpum = new Sangpum(
                bean.getCode(),
                bean.getSang(),
                bean.getSu(),
                bean.getDan()
            );
            repository.save(sangpum);
            return "success";
        } catch (Exception e) {
            e.printStackTrace(); // 디버깅용
            return "입력 오류: " + e.getMessage();
        }
    }


    // 수정
    @Transactional
    public String update(SangpumBean bean) {
        try {
            Sangpum sangpum = new Sangpum(
                    bean.getCode(),
                    bean.getSang(),
                    bean.getSu(),   
                    bean.getDan() 
            );
            repository.save(sangpum);  
            return "success";
        } catch(Exception e) {
            return "수정 오류: " + e.getMessage();
        }
    }

    // 삭제
    @Transactional
    public String delete(int code) {
        try {
            repository.deleteById(code);
            return "success";
        } catch(Exception e) {
            return "삭제 오류: " + e.getMessage();
        }
    }
}
