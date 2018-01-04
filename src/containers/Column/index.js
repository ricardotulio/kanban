'use strict'

import React from 'react'
import Title from '../../components/Title'
import Card from '../Card'
import { map } from 'ramda'
import styles from './Column.scss'

const Column = (props) => (
  <div className={styles.column}>
    <Title size="2">{props.title}</Title>
    {map(card =>
      <Card
        key={card.id}
        title={card.title}
        body={card.body} />,
      props.cards)}
  </div>
)

export default Column
