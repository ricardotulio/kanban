'use strict'

import React, { Component } from 'react'
import PageHeader from '../../components/PageHeader'
import Board from '../../components/Board'
import { append } from 'ramda'

class Kanban extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: [
        {
          id: "193401",
          title: "To Do",
          cards: [
            {
              id: "903420934",
              title: "Vai filhão!",
              body: "xuplau!",
            }
          ],
        },
      ],
    }

		this.addColumn = this.addColumn.bind(this)
  }

  addColumn() {
    const column = {
      id: "chululul",
      title: "Nova columna",
      cards: [],
    }

    const columns = append(column, this.state.columns)

    this.setState({ columns })
  }

  render() {
	  return (
			<div>
				<PageHeader
					icon="test"
					pageTitle="test" />
				<Board columns={this.state.columns} />
        <button onClick={this.addColumn}>Adicionar coluna</button>
			</div>
		)
  }
}
export default Kanban
