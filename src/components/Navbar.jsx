import React from "react";
import { useAuth } from "../hooks";
import { NavLink } from "react-router-dom";

function Navbar() {
    const { isAuth, authUser } = useAuth();

    console.log("authUser", { isAuth, authUser });
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <NavLink activeClassName="active" className="navbar-brand" to="/" end>
                    <b>BloggingBuddy</b>
                </NavLink>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="navbar-brand"
                            to="/"
                            end
                        >
                            <b>Home</b>
                        </NavLink>
                    </li>

                    {isAuth && (
                        <>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="navbar-brand"
                                    to="/editor"
                                >
                                    {/* <i className="ion-compose"/> */}
                                    &nbsp; <b>Write Article</b>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="navbar-brand"
                                    to="/settings"
                                >
                                    {/* <i className="ion-compose"/> */}
                                    &nbsp; <b>Settings</b>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="navbar-brand"
                                    to={`/@${authUser?.username}`}
                                >
                                    {/* image */}
                                    <b>Welcome!</b> {authUser?.username}
                                </NavLink>
                            </li>
                        </>
                    )}

                    {!isAuth && (
                        <>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="navbar-brand"
                                    to="/register"
                                >
                                    {/* <i className="ion-compose"/> */}
                                    <b>Sign up</b>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    className="navbar-brand"
                                    to="/login"
                                >
                                    {/* <i className="ion-compose"/> */}
                                    <b>Sign in</b>
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;