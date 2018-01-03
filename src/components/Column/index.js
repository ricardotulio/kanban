'use strict'

import React from 'react'
import ColumnTitle from '../ColumnTitle'
import Card from '../Card'
import { map } from 'ramda'
import styles from './Column.scss'

const Column = (props) => (
  <div className={styles.column}>
    <ColumnTitle>{props.title}</ColumnTitle>
    {map(card => <Card key={card.id} title={card.title} body={card.body} />, props.cards)}
  </div>
)

export default Column
