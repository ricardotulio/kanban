'use strict'

import React from 'react'
import Title from '../../components/Title'
import styles from './Card.scss'

const Card = (props) => (
  <div className={styles.card}>
    <Title size="3">{props.title}</Title>
    <p>{props.body}</p>
  </div>
)

export default Card
