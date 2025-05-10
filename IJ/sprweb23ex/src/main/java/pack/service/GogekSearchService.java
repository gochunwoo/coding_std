package pack.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pack.dto.GogekDto;
import pack.entity.Gogek;
import pack.repository.GogekRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GogekSearchService {

    private final GogekRepository gogekRepository;

    public List<GogekDto> findByJikwon(int no, String name) {
        return gogekRepository.findByJikwon_JikwonnoAndJikwon_Jikwonname(no, name)
                .stream()
                .map(GogekDto::fromEntity)
                .toList();
    }
}
