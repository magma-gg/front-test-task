import styles from './Wrapper.module.scss'

function Wrapper ({ children } = {}) {
  return <div className={styles.main}>{children}</div>
}

export default Wrapper
