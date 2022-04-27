package com.asdui.backend.repository;

import com.asdui.backend.models.UserSettings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserSettingsRepository extends JpaRepository<UserSettings, Long> {
    @Query(value = "SELECT * FROM user_settings WHERE user_id = :userID", nativeQuery = true)
    UserSettings findUserSettingsByUserId(@Param("userID") Long userID);
}
