package com.example.sprweb21ajax;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class MyModel {
    private String name;
    private String skills[];
}
