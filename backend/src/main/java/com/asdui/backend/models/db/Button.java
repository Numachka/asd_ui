package com.asdui.backend.models.db;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "button")
public class Button {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "background_color")
    private String backgroundColor;
    @Column(name = "size")
    private String size;
    @Column(name = "content")
    private String content;
    @Column(name = "content_color")
    private String contentColor;
    @Column(name = "content_size")
    private String contentSize;
    @Column(name = "content_action")
    private String contentAction;

    public Button() {
    }

    public Button(Button other) {
        this.id = other.getId();
        this.backgroundColor = other.getBackgroundColor();
        this.content = other.getContent();
        this.contentColor = other.getContentColor();
        this.contentSize = other.getContentSize();
        this.contentAction = other.getContentAction();
    }
}