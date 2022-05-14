package com.asdui.backend.controllers;

import com.asdui.backend.models.db.*;
import com.asdui.backend.models.responses.Credentials;
import com.asdui.backend.models.responses.UserInterfacePackage;
import com.asdui.backend.models.responses.UserPackage;
import com.asdui.backend.repository.*;
import lombok.extern.slf4j.Slf4j;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/asdui")
@Slf4j
public class AccountController {
    @Autowired UserRepository userRepository;
    @Autowired UserInterfaceRepository uiRepository;
    @Autowired UserSettingsRepository userSettingsRepository;
    @Autowired CardRepository cardRepository;
    @Autowired ImageRepository imageRepository;
    @Autowired ButtonRepository buttonRepository;

    // -------------------------- Registration Methods------------------------ //

    @GetMapping("/register/introduction/email-check/{username}")
    public ResponseEntity<Boolean> checkUsernameInDatabase(@PathVariable String username) {
        List<User> users = userRepository.findAll();
        Optional<User> returnedUser = users.stream().filter(user -> user.getEmail().equals(username)).findFirst();
        log.info("Found email : " + returnedUser);
        return new ResponseEntity<>(returnedUser.isPresent(), HttpStatus.OK);
    }

    @PostMapping("/register/details/create-user")
    public ResponseEntity<User> createUserInDatabase(@RequestBody User user) {
        try {
            User newUser = userRepository.save(new User(user));
            userSettingsRepository.save(new UserSettings(newUser.getID(), true));
            log.info("Created user: " + newUser);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // --------------------------- Login Methods ---------------------------- //

    @PostMapping("/login")
    public ResponseEntity<UserPackage> loginUser(@RequestBody Credentials credentials) {
        try {
            String username = credentials.getUsername().toLowerCase();
            String password = credentials.getPassword();
            List<User> users = userRepository.findAll();
            UserPackage userPackage = null;
            Optional<User> returnedUser = users.stream().filter(user -> user.getEmail().equals(username)).findFirst();
            if (returnedUser.isPresent() && returnedUser.get().getPassword().equals(password)) {
                val userId = returnedUser.get().getID();
                userPackage = new UserPackage(
                        userRepository.getById(userId),
                        uiRepository.findUserInterfaceByUserId(userId),
                        userSettingsRepository.findUserSettingsByUserId(userId));
            }
            log.info("Found user package" + userPackage);
            return new ResponseEntity<>(userPackage, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // --------------------------- User Interface ---------------------------- //
    @GetMapping("/settings/user-interface/{id}")
    public ResponseEntity<UserInterface> getUserInterface(@PathVariable Integer id) {
        try {
            UserInterface userInterface = new UserInterface(uiRepository.getById((long)id));
            log.info("Found user interface " + userInterface);
            return new ResponseEntity<>(userInterface, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/settings/user-interface")
    public ResponseEntity<Boolean> updateUserInterface(@RequestBody UserInterface[] userInterface) {
        try {
            Arrays.stream(userInterface).forEach(ui -> {
                Card card = new Card(ui.getCard());
                Image image = new Image(ui.getImage());
                Button button = new Button(ui.getButton());
                Optional<User> userOption = Optional.of(userRepository.getById(ui.getUser()));
                User user = new User(userOption.get());

                cardRepository.save(card);
                imageRepository.save(image);
                buttonRepository.save(button);
                uiRepository.save(new UserInterface(user.getID(), card, image, button));
            });
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
