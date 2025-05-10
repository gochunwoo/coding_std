package com.example.demo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
@Controller
public class FormController {
    @GetMapping("/abc")
    public String abc(@RequestParam String name, @RequestParam int age, Model model) {
        String ageGroup;
        if (age >= 20 && age < 30) {
            ageGroup = "이십대";
        } else if (age >= 30 && age < 40) {
            ageGroup = "삼십대";
        } else if (age >= 40 && age < 50) {
            ageGroup = "사십대";
        } else {
            ageGroup = "기타 연령대";
        }
        model.addAttribute("message", name + "님은 " + ageGroup);
        return "result";
    }
}