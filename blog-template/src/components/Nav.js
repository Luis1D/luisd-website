import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div className="nav">
            {/* <img src={require("../assets/portrait.jpg")} alt="portrait" className="portrait"/> */}
            <nav>
                <div className="user-name">
                    <h1 className="my-name">Luis <span>De</span>Anda</h1>
                    <h2>Full-Stack JavaScript Developer</h2>
                </div>
                <div className="navigation">
                    <li className="nav-item"><NavLink exact to="/" activeStyle={{color: 'rgb(95, 95, 95)', borderBottom: '.25rem solid rgba(0, 0, 0, .9)', paddingBottom: '.25rem'}}>About</NavLink></li>
                    <li className="nav-item"><NavLink to="/Portfolio" activeStyle={{color: 'rgb(95, 95, 95)', borderBottom: '.25rem solid rgba(0, 0, 0, .9)', paddingBottom: '.25rem'}}>Portfolio</NavLink></li>
                </div>
            </nav>
        </div>
    )
}

export default Nav;