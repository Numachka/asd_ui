package com.asdui.backend.repository;

import com.asdui.backend.models.db.UserSettings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserSettingsRepository extends JpaRepository<UserSettings, Long> {
    @Query(value = Queries.GET_USER_SETTING_BY_ID, nativeQuery = true)
    UserSettings findUserSettingsByUserId(@Param("userID") Long userID);
}
