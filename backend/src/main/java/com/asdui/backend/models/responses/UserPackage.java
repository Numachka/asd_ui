package com.asdui.backend.models.responses;


import com.asdui.backend.models.db.User;
import com.asdui.backend.models.db.UserInterface;
import com.asdui.backend.models.db.UserSettings;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserPackage {
    private User user;
    private UserInterface[] userInterface;
    private UserSettings userSettings;
}
