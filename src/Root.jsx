import React from "react";
import { Outlet } from "react-router-dom"
import { NavBar } from "./components/Nav";

export function RootLayout(){
    return(
        <>
        <NavBar/>
        <Outlet/>
        </>
    )
}