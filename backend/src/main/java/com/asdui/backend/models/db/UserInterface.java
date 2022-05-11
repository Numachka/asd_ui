package com.asdui.backend.models.db;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "user_interface")
public class UserInterface {
    @Id
    @Column(name = "id", nullable = false)
    private Integer ID;
    @Column(name = "user_id", nullable = false)
    private Integer userID;
    @Column(name = "card_id", nullable = false)
    private Integer cardID;
    @Column(name = "image_id", nullable = false)
    private Integer imageID;
    @Column(name = "button_id", nullable = false)
    private Integer buttonID;

    public UserInterface(UserInterface otherUserInterface) {
        ID = otherUserInterface.getID();
        userID = otherUserInterface.getUserID();
        cardID = otherUserInterface.getCardID();
        buttonID = otherUserInterface.getButtonID();
    }

    public UserInterface() {

    }
}