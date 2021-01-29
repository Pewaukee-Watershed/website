/*
 *  This file is part of the Pewaukee Watershed Official Website.
 *  Copyright (C) 2020-2021  Pewaukee Watershed
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import Head from 'next/head'
import WithSidebar from '../lib/elements/with-sidebar'
import ContentGrid from '../lib/elements/content-grid'
import Block from '../lib/elements/block'
import styles from './index.module.scss'
import AbstractBlock from '../lib/AbstractBlock'
import LinkBlock from '../lib/LinkBlock'
import getData from '../lib/getData'

const App = (props): JSX.Element => (
  <>
    <Head>
      <title>Pewaukee Watershed</title>
    </Head>
    <WithSidebar>
      <ContentGrid>
        { props.blocks.map((v: AbstractBlock, i: number) => new LinkBlock(v.name, `/data/${ v.page }`).element(i)) }
      </ContentGrid>
    </WithSidebar>
  </>
)

export const getStaticProps = async () => {
  console.log(await getData())

  return {
    props: {
      blocks: await getData()
    }
  }
}

export default App
