package com.asdui.backend.controllers;

import com.asdui.backend.models.Question;
import com.asdui.backend.models.User;
import com.asdui.backend.models.UserInterface;
import com.asdui.backend.models.UserPackage;
import com.asdui.backend.repository.QuestionRepository;
import com.asdui.backend.repository.UserInterfaceRepository;
import com.asdui.backend.repository.UserRepository;
import com.asdui.backend.repository.UserSettingsRepository;
import lombok.extern.slf4j.Slf4j;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/asdui")
@Slf4j
public class AccountController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    UserInterfaceRepository uiRepository;
    @Autowired
    UserSettingsRepository userSettingsRepository;

    // -------------------------- Registration Methods------------------------ //
    @GetMapping("/register/introduction/email-check/{username}")
    public ResponseEntity<Boolean> checkUsernameInDatabase(@PathVariable String username) {
        List<User> users = userRepository.findAll();
        Optional<User> returnedUser = users.stream().filter(user -> user.getEmail().equals(username)).findFirst();
        return new ResponseEntity<>(returnedUser.isPresent(), HttpStatus.OK);
    }

    @PostMapping("/register/details/create-user")
    public ResponseEntity<User> createUserInDatabase(@RequestBody User user) {
        try {
            User newUser = userRepository.save(new User(user));
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/register/magic/generate-ui")
    public ResponseEntity<Question> createQuestionData(@RequestBody Question question) {
        try {
            Question newQuestion = questionRepository.save(new Question(question));
            //TODO post to database a newly generated UI based on answers.
            return new ResponseEntity<>(newQuestion, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<UserPackage> loginUser(@RequestBody Map<String, String> credentials) {
        try {
            String username = credentials.get("username");
            String password = credentials.get("password");
            List<User> users = userRepository.findAll();
            UserPackage userPackage = null;
            Optional<User> returnedUser = users.stream().filter(user -> user.getEmail().equals(username)).findFirst();
            if (returnedUser.isPresent() && returnedUser.get().getPassword().equals(password)) {
                val userId = returnedUser.get().getId();
                userPackage = new UserPackage(
                        userRepository.getById(userId),
                        uiRepository.findUserInterfaceByUserId(userId),
                        userSettingsRepository.findUserSettingsByUserId(userId));
            }
            log.info(String.valueOf(userPackage));
            return new ResponseEntity<>(userPackage, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // --------------------------- User Interface ---------------------------- //
    @GetMapping("/settings/user-interface/{id}")
    public ResponseEntity<UserInterface> getUserInterface(@RequestBody Integer id) {
        try {
            UserInterface userInterface = uiRepository.getById((long) id);
            return new ResponseEntity<>(userInterface, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/settings/user-interface")
    public ResponseEntity<UserInterface> updateUserInterface(@RequestBody UserInterface userInterface) {
        try {
            UserInterface uiToUpdate = new UserInterface(userInterface);
            uiRepository.save(uiToUpdate);
            return new ResponseEntity<>(uiToUpdate, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
