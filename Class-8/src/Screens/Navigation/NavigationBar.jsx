import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Navigation/Navbar.module.css'
const NavigationBar = () => {
    return (
        <div className={styles.mainContainer}>
            <ul>
                <li className={styles.list1}>
                    <NavLink to='/form'>
                        Form
                    </NavLink>
                </li>
                <li className={styles.list2}>
                    <NavLink to='/table'>
                        Table
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}

export default NavigationBar
