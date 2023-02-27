import React from "react";
import {Link} from 'react-router-dom'


export function NavBar(){
    return <header className="header">
        <nav className="nav">
            <ul>
                <li><Link className="link" to={"/"}>Home</Link></li>
                <li><Link className="link" to={"/shoesPage"}>Products</Link></li>
                <li><Link className="link" to={"/checkout"}>checkout</Link></li>
                {/* <li><Link className="link" to={"/shoe/:id"}>Details</Link></li>
                <li><Link className="link" to={"/update"}>Update shoe</Link></li> */}
            </ul>
        </nav>
    </header>
}