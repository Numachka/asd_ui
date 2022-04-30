package com.asdui.backend.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class UserPackage {
    private User user;
    private UserInterface userInterface;
    private UserSettings userSettings;
}
