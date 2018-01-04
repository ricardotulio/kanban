'use strict'

import React from 'react'
import Icon from '../../components/Icon'
import Title from '../../components/Title'
import styles from './Header.scss'

const Header = (props) => (
  <div className={styles.header}>
    <Icon>{props.icon}</Icon>
    <Title>{props.title}</Title>
  </div>
)

export default Header
