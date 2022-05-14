package com.asdui.backend.repository;

import com.asdui.backend.models.db.UserInterface;
import com.asdui.backend.models.responses.UserInterfacePackage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserInterfaceRepository extends JpaRepository<UserInterface, Long> {
    @Query(value = Queries.GET_USER_INTERFACE_PACKAGE_BY_ID, nativeQuery = true)
    UserInterfacePackage findUserInterfacePackageByUserId(@Param("userID") Long userID);

    @Query(value = Queries.GET_USER_INTERFACE_PACKAGE_BY_ID, nativeQuery = true)
    UserInterface[] findUserInterfaceByUserId(@Param("userID") Long userID);
}
