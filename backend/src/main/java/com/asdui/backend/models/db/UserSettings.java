package com.asdui.backend.models.db;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "user_setting")
public class UserSettings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long ID;
    @Column(name = "user_id", nullable = false)
    private Long userID;
    @Column(name = "is_active", nullable = false)
    private Boolean isActive;

    public UserSettings() {}

    public UserSettings(Long userID, Boolean isActive) {
        this.userID = userID;
        this.isActive = isActive;
    }
}
