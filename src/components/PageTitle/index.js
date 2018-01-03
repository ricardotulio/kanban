'use strict'

import React from 'react'
import styles from './PageTitle.scss'

const PageTitle = (props) => (
  <h1 className={styles.pageTitle}>{props.children}</h1>
)

export default PageTitle
