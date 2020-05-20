import styles from './Header.module.scss'
import Link from 'next/link'

function Header () {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <a>Sandbox</a>
      </Link>
      <Link href='/schedule'>
        <a>Schedule</a>
      </Link>
    </div>
  )
}

export default Header
