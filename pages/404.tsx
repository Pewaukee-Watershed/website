import Head from 'next/head'
import WithSidebar from '../components/WithSidebar'
import Link from 'next/link'
import styles from './404.module.scss'
import getData from '../lib/getData'

const App = (props): JSX.Element => (
  <div>
    <Head>
      <title>Pewaukee Watershed</title>
    </Head>
    <WithSidebar>
      <div className={styles.content}>
        404 not found. <br />
        This page does not exist. <br />
        <Link href="/">Go back</Link>
      </div>
    </WithSidebar>
  </div>
)

export default App