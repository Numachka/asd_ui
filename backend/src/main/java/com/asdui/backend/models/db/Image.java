package com.asdui.backend.models.db;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long ID;
    @Column(name="url")
    private String url;
    @Column(name="size")
    private String size;

    public Image() {}

    public Image(Image other) {
        this.ID = other.getID();
        this.url = other.getUrl();
        this.size = other.getSize();
    }


}