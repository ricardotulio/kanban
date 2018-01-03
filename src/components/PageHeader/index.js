'use strict'

import React from 'react'
import Icon from '../Icon'
import PageTitle from '../PageTitle'
import styles from './PageHeader.scss'

const PageHeader = (props) => (
  <div className={styles.header}>
    <Icon>{props.icon}</Icon>
    <PageTitle>{props.title}</PageTitle>
  </div>
)

export default PageHeader
