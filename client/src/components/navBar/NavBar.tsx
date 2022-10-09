import {FunctionComponent} from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar: FunctionComponent = () => {
    return (
        <nav>
            <ul className="flex justify-end w-full h-7">
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About me</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
            </ul>
        </nav>
    )
}