'use strict'

import React from 'react'
import {
  cond,
  prop,
  propEq,
  T,
} from 'ramda'

const Title = cond([
  [propEq('size', '1'), props => (<h1>{prop('children', props)}</h1>)],
  [propEq('size', '2'), props => (<h2>{prop('children', props)}</h2>)],
  [propEq('size', '3'), props => (<h3>{prop('children', props)}</h3>)],
  [propEq('size', '4'), props => (<h4>{prop('children', props)}</h4>)],
  [propEq('size', '5'), props => (<h5>{prop('children', props)}</h5>)],
  [T, props => (<h1>{prop('children', props)}</h1>)],
])

export default Title
