package com.asdui.asdui_backend.repository;

import com.asdui.asdui_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {}
