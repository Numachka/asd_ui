package com.asdui.backend.controllers;

import com.asdui.backend.models.responses.Question;
import lombok.extern.slf4j.Slf4j;
import lombok.val;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.io.BufferedWriter;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.Map;
import java.util.Optional;

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

//    @PostMapping("/settings/save-image")
//    public ResponseEntity<Boolean> saveImage(@RequestBody Map<String, Object> formData) {
//        try {
//            formData.keySet().forEach(key -> {
//                ImageIO.write(formData.get(key), new File(''));
//            });
//            return new ResponseEntity<>(true, HttpStatus.CREATED);
//        } catch (Exception e) {
//            return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
}
