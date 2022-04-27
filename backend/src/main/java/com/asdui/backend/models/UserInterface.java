package com.asdui.backend.models;

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
    @Column(name = "main_id", nullable = false)
    private Integer id;

    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(name = "card_id", nullable = false)
    private Integer cardId;

    @Column(name = "header_id", nullable = false)
    private Integer headerId;

    @Column(name = "picture_id", nullable = false)
    private Integer pictureId;

    @Column(name = "button_id", nullable = false)
    private Integer buttonId;

    public UserInterface(UserInterface otherUserInterface) {
        id = otherUserInterface.getId();
        userId = otherUserInterface.getUserId();
        cardId = otherUserInterface.getCardId();
        headerId = otherUserInterface.getHeaderId();
        pictureId = otherUserInterface.getPictureId();
        buttonId = otherUserInterface.getButtonId();
    }

    public UserInterface() {

    }
}