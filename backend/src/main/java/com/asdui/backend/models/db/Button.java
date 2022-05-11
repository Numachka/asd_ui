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
    private Integer ID;

    @Column(name="background_color")
    private String backgroundColor;

    @Column(name="content")
    private String content;

    @Column(name="content_color")
    private String contentColor;

    @Column(name="content_size")
    private String contentSize;

    @Column(name="content_action")
    private String contentAction;
}