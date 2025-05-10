package pack.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pack.controller.MemBean;
import pack.dto.MemDto;
import pack.entity.Mem;
import pack.repository.MemCrudRepository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class DataProcess {
    @Autowired
    private MemCrudRepository repository;

    // 전체 자료
    public List<MemDto> getDataAll() {
        return repository.findAll().stream()
                .map(MemDto::fromEntity)
                .collect(Collectors.toList());
    }

    // 자료 추가
    @Transactional
    public String insert(MemBean bean) {
//        // 이미 있는 번호인지 확인 (existsById)
//        if (repository.existsById(bean.getNum())) { //*(pk,기본키)*를 가진 데이터가 db에 존재여부(true/false) 확인
//            return "이미 등록된 번호입니다.";
//        }
//        try {
//            Mem mem = new Mem(bean.getNum(), bean.getName(), bean.getAddr());
//            repository.save(mem);
//            return "success";
//        } catch (Exception e) {
//            return "입력자료 오류 : " + e.getMessage();
//        }
        if (repository.existsById(bean.getNum())) {
            throw new RuntimeException("이미 등록된 번호입니다.");
        }
        repository.save(new Mem(bean.getNum(), bean.getName(), bean.getAddr()));
        return "success";
    }

    // 수정,삭제를 위한 레코드 읽기
    public MemDto getData(int num) {
        Mem mem = repository.findById(num).orElse(null);
        return MemDto.fromEntity(mem);
    }


    // 수정
    @Transactional
    public String update(MemBean bean) {
        // 먼저 해당 번호의 회원이 존재하는지 확인
        Mem existing = repository.findById(bean.getNum()).orElse(null);
        if (existing == null) {
            throw new RuntimeException("수정할 데이터가 존재하지 않습니다.");
        }
        // 값 변경 후 저장 (update는 save 메서드로 처리)
        existing.setName(bean.getName());
        existing.setAddr(bean.getAddr());
        repository.save(existing);  // JPA는 변경감지 + save 둘 다 사용 가능
        return "success";
    }

    // 삭제
    @Transactional
    public String delete(int num) {
        if (!repository.existsById(num)) {
            throw new RuntimeException("삭제할 데이터가 존재하지 않습니다.");
        }
        repository.deleteById(num);
        return "success";
    }

}
