import Head from 'next/head'
import WithSidebar from '../components/WithSidebar'
import Link from 'next/link'
import styles from './404.module.scss'

const App = (props): JSX.Element => (
  <div>
    <Head>
      <title>Pewaukee Watershed</title>
    </Head>
    <WithSidebar>
      <div className={styles.content}>
        <span className={styles.fourohfour}>Oh no!</span> <br />
        <span className={styles.noexisto}>We could not get this page back for you, a fish must have eaten it! If you believe this is an error, please make an issue on the <a className='link' href='https://github.com/Pewaukee-Watershed/website'>GitHub.</a></span> <br />
        <span className={styles.goback}><Link href="/">Continue to support your watershed</Link></span>
      </div>
    </WithSidebar>
  </div>
)

export default App