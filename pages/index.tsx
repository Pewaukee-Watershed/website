import Head from 'next/head'
import styles from './index.module.scss'
import WithSidebar from '../lib/with-sidebar'

const App = (): JSX.Element => (
  <>
    <Head>
      <title>Pewaukee Watershed</title>
    </Head>
    <WithSidebar>
      <h1 
        className={styles.myClass}
      >Pewaukee Watershed</h1>
    </WithSidebar>
  </>
)

export default App
