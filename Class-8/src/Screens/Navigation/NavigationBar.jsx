import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Navigation/Navbar.module.css'
const NavigationBar = () => {
    return (
        <div className={styles.mainContainer}>
            <ul>
                <li>
                    <Link to='/form'>
                        Form
                    </Link>
                </li>
                <li>
                    <Link to='/table'>
                        Table
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default NavigationBar
