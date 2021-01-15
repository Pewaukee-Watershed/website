import Sidebar from './sidebar'
import styles from './with-sidebar.module.scss'

interface Props {
  children: JSX.Element
} 
const WithSidebar = (props: Props): JSX.Element => (
  <div className={styles.everything}>
    <div className={styles.sidebar}>
      <Sidebar />
    </div>
    <div className={styles.content}>
      {props.children}
    </div>
  </div>
)

export default WithSidebar
