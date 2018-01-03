'use strict'

import React from 'react'
import Column from '../Column'
import { map } from 'ramda'
import styles from './Board.scss'

const Board = () => (
  <div className={styles.board}>
    {map(column =>
			<Column	key={column.id}
				title={column.title}
				cards={column.cards} />,
		columns)}
  </div>
)

export default Board
