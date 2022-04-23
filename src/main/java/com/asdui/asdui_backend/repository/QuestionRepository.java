package com.asdui.asdui_backend.repository;

import com.asdui.asdui_backend.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
