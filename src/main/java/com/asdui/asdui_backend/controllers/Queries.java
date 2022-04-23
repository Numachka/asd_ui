package com.asdui.asdui_backend.controllers;

public class Queries {

    public final String GET_ALL_USERS = "SELECT * FROM asdui.users";
    public final String GET_USER_BY_ID = "SELECT * FROM asdui.users WHERE Id = ";
    public final String GET_USER_INTERFACE_BY_USER_ID = "SELECT * FROM user_interface WHERE ID = ";

}
