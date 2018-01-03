'use strict'

import React from 'react'
import styles from './CardBody.scss'

const CardBody = (props) => (
  <p className={styles.cardBody}>{props.children}</p>
)

export default CardBody
