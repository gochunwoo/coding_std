package pack.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pack.model.DataProcess;
import pack.model.Sangpum;

@RestController
@RequestMapping("/api")
public class SangpumController {

    @Autowired
    private DataProcess dataProcess;

    @GetMapping("/products")
    public List<Sangpum> listProcess() {
        return dataProcess.getDataAll();
    }

    @PostMapping("/products")
    public Map<String, Object> insertProcess(@RequestBody SangpumBean bean) {
        System.out.println("POST /api/products 호출: " + bean); // 디버깅용
        String result = dataProcess.insert(bean);
        if (result.equals("success")) {
            return Map.of("isSuccess", true);
        } else {
            return Map.of("isSuccess", false, "msg", result);
        }
    }

    @PutMapping("/products")
    public Map<String, Object> updateProcess(@RequestBody SangpumBean bean) {
        String result = dataProcess.update(bean);
        if(result.equals("success")){
            return Map.of("isSuccess", true);
        } else {
            return Map.of("isSuccess", false, "msg", result);
        }
    }


    @DeleteMapping("/products/{code}")
    public Map<String, Object> deleteProcess(@PathVariable("code") int code) {
        String result = dataProcess.delete(code);
        if(result.equals("success")){
            return Map.of("isSuccess", true);
        } else {
            return Map.of("isSuccess", false, "msg", result);
        }
    }
}
