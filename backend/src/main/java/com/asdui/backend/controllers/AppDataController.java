package com.asdui.backend.controllers;

import com.asdui.backend.models.responses.Question;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/asdui")
@Slf4j
public class AppDataController {
    @PostMapping("/register/magic/calculate-ui")
    public ResponseEntity<Question> createQuestionData(@RequestBody Question question) {
        try {
            Question newQuestion = new Question(question);
            return new ResponseEntity<>(newQuestion, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
