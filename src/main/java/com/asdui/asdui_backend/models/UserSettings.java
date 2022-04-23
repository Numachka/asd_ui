package com.asdui.asdui_backend.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "user_settings")
public class UserSettings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "set_id", nullable = false)
    private Long setID;
    @Column(name = "user_id", nullable = false)
    private Long userID;
    @Column(name = "is_active", nullable = false)
    private Boolean isActive;
}
