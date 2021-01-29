/*
 *  This file is part of the Pewaukee Watershed official website.
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

import AbstractBlock from './AbstractBlock'
import styles from '../pages/index.module.scss' 
import Block from './elements/block'

export default class LinkBlock extends AbstractBlock {
  link: string
  text: string
  
  constructor (text: string, link: string) {
    super()
    this.link = link
    this.text = text
  }

  element: Function = (i: number): JSX.Element => {
    return (
      <Block side={ this.getSide(i) } color={ this.getColor(i) }>
        <a href={ this.link } className={ styles.link }>
          { this.text }
        </a>
      </Block>
    )
  }
}