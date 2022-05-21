package com.asdui.backend.models.db;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "card")
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "background_color")
    private String backgroundColor;
    public Card() {}
    public Card(Card other) {
        this.id = other.getId();
        this.backgroundColor = other.getBackgroundColor();
    }


}