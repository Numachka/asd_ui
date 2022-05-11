package com.asdui.backend.repository;

import com.asdui.backend.models.db.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {}
