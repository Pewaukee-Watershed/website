import Head from 'next/head'
import WithSidebar from '../../components/WithSidebar'
import styles from './about-us.module.scss'

const App = (props): JSX.Element => (
  <div>
    <Head>
      <title>Pewaukee Watershed</title>
    </Head>
    <WithSidebar>
      <div className={styles.content}>
        <span className={styles.title}>The Pewaukee Watershed Team</span> <br />
        <span className={styles.sub}>A group of students who are keen on the state of our waters and how we can keep them healthy.</span> <br />
        <span className={styles.content} />
      </div>
    </WithSidebar>
  </div>
)

export default App
