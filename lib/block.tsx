/*
 *  This file is part of the Pewaukee Watershed official website.
 *  Copyright (C) 2021  Pewaukee Watershed
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

import styles from './block.module.scss'

interface Props {
  side: 'Left' | 'Right'
  children?: JSX.Element
}
const Block = (props: Props): JSX.Element => (
  <div 
    className={(
      Math.random() < 0.25 
        ? styles.red 
        : Math.random() < 0.5 
          ? styles.yellow 
          : Math.random() < 0.75 
            ? styles.green 
            : styles.blue
    ) + ' ' + styles.block + ' ' + styles[`block${props.side}`] }>{ props.children}
  </div>
)

export default Block