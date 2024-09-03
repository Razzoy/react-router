import { NavLink } from "react-router-dom";
import style from '../Navbar/Navbar.module.scss'

export function Navbar() {
    return(
        <nav className={style.navbarStyle}>
            <ul>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: 'burlywood'} : {color: 'White'}} to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: 'burlywood'} : {color: 'White'}} to={'/concept'}>Concept</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: 'burlywood'} : {color: 'White'}} to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: 'burlywood'} : {color: 'White'}} to={'/contact'}>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}