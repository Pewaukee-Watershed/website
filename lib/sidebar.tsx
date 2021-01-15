import styles from './sidebar.module.scss'

const Sidebar = (): JSX.Element => (
  <div className={styles.sidebar}>
    <a href='/'>Home</a>
  </div>
)

export default Sidebar
