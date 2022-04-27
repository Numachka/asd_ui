package com.asdui.backend.repository;

import com.asdui.backend.models.UserInterface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserInterfaceRepository extends JpaRepository<UserInterface, Long> {

    @Query(value = "SELECT * FROM user_interface WHERE user_id = :userID", nativeQuery = true)
    UserInterface findUserInterfaceByUserId(@Param("userID") Long userID);
}
