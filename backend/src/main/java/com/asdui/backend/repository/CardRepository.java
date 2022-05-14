package com.asdui.backend.repository;

import com.asdui.backend.models.db.Card;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CardRepository extends JpaRepository<Card, Long> {}
