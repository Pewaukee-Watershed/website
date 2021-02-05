import Head from 'next/head'
import WithSidebar from '../components/WithSidebar'
import styles from './index.module.scss'
import getData from '../lib/getData'

const App = (props): JSX.Element => (
  <>
    <Head>
      <title>Pewaukee Watershed</title>
    </Head>
    <WithSidebar>
      404 not found. <b />
      This page does not exist. <b />
      <Link href="/">Go back</Link>
    </WithSidebar>
  </>
)