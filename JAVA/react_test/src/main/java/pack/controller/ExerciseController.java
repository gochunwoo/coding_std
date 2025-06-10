package pack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pack.entity.Exercise;
import pack.repository.ExerciseRepository;

import java.util.List;

@RestController
@RequestMapping("/api/exercise")
@CrossOrigin(origins = "http://localhost:3000")
public class ExerciseController {

    @Autowired
    private ExerciseRepository exerciseRepository;

    // 전체 운동 기록 조회
    @GetMapping
    public List<Exercise> getAll() {
        return exerciseRepository.findAll();
    }

    // 운동 기록 등록
    @PostMapping
    public Exercise create(@RequestBody Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    // 운동 기록 수정
    @PutMapping("/{id}")
    public Exercise update(@PathVariable Long id, @RequestBody Exercise exercise) {
        Exercise target = exerciseRepository.findById(id).orElseThrow();
        target.setName(exercise.getName());
        target.setDuration(exercise.getDuration());
        target.setCalorieburn(exercise.getCalorieburn());
        return exerciseRepository.save(target);
    }

    // 운동 기록 삭제
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        exerciseRepository.deleteById(id);
    }
}