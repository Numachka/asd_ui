package com.asdui.backend.models.db;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@ToString
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long ID;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "phone_number")
    private String phoneNumber;

    public User() {}

    public User(User otherUser) {
        this.ID = otherUser.getID();
        this.firstName = otherUser.getFirstName();
        this.lastName = otherUser.getLastName();
        this.email = otherUser.getEmail();
        this.password = otherUser.getPassword();
        this.phoneNumber = otherUser.getPhoneNumber();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        User user = (User) o;
        return ID != null && Objects.equals(ID, user.ID);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
