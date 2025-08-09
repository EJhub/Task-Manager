import styles from '../styles/NavBar.module.css'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className={styles.NavContainer}>
        <h1 className={styles.Logo}>EJ</h1>
        <ul className={styles.ListContainer}>
            <Link to='/' className={styles.link}><li className={styles.li}>Tasks</li></Link>
            <Link to='/complete' className={styles.link}><li className={styles.li}>Complete List</li></Link>
        </ul>
    </nav>
  )
}

export default NavBar