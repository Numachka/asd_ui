package com.asdui.backend.models.db;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "user_interface")
public class UserInterface {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;
    @Column(name="user_id")
    private Long user;
    @ManyToOne(targetEntity = Card.class)
    @JoinColumn(name="card_id", referencedColumnName = "id")
    private Card card;
    @ManyToOne(targetEntity = Image.class)
    @JoinColumn(name="image_id", referencedColumnName = "id")
    private Image image;
    @ManyToOne(targetEntity = Button.class)
    @JoinColumn(name="button_id", referencedColumnName = "id")
    private Button button;

    public UserInterface() {}

    public UserInterface(UserInterface other) {
        this.user = other.getUser();
        this.card = other.getCard();
        this.image = other.getImage();
        this.button = other.getButton();
    }

    public UserInterface(Long userID, Card card, Image image, Button button) {
        this.ID = card.getId();
        this.user = userID;
        this.card = card;
        this.image = image;
        this.button = button;
    }
}