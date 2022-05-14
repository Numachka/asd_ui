package com.asdui.backend.repository;

public class Queries {

    public static final String GET_USER_SETTING_BY_ID = "select * from user_setting where id = :userID";
    public static final String GET_USER_INTERFACE_PACKAGE_BY_ID = "select * from (((user_interface join card on user_interface.card_id = card.id) join image on user_interface.image_id = image.id) join button on user_interface.button_id = button.id) where user_id = :userID";
    public static final String GET_USER_INTERFACE_BY_ID = "select * from user_interface = :userID";

}