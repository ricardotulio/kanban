'use strict'

import React from 'react'
import CardTitle from '../CardTitle'
import CardBody from '../CardBody'
import styles from './Card.scss'

const Card = (props) => (
  <div className={styles.card}>
    <CardTitle>{props.title}</CardTitle>
    <CardBody>{props.body}</CardBody>
  </div>
)

export default Card
