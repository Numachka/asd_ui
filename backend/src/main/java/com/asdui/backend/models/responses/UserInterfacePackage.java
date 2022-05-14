package com.asdui.backend.models.responses;

import com.asdui.backend.models.db.Button;
import com.asdui.backend.models.db.Card;
import com.asdui.backend.models.db.Image;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserInterfacePackage {
    private Integer userID;
    private Card card;
    private Image image;
    private Button button;
}
