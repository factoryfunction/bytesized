import * as React from 'react'
import { observer, Observer } from 'mobx-react'
import { computed, observable, action } from 'mobx'
import * as ramda from 'ramda'
import isPrimitive from 'is-primitive'
import kindOf from 'kind-of'
import ReactJson from 'react-json-view'
import {
  Accordion,
  AccordionItem,
  CodeSnippet,
  ExpandableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent
} from 'carbon-components-react'

import './styles/ConsoleTable.css'

@observer
export class ConsoleTable extends React.Component {
  @observable openLogs = new Set()

  @action
  toggleOpenLog = (event) => {
    console.log(event)
  }

  render() {
    const { props } = this

    return (
      <div styleName="ConsoleTable">
        <For each="log" of={props.store.logs}>
          <ExpandableTile styleName="logTile">
            <TileAboveTheFoldContent>
              <div style={{ height: '32px' }}>
                <LogHeading {...log} />
              </div>
            </TileAboveTheFoldContent>
            <TileBelowTheFoldContent>
              <div style={{ height: '108px' }}>Below the fold content here</div>
            </TileBelowTheFoldContent>
          </ExpandableTile>
        </For>
      </div>
    )
  }
}

const LogHeading = (props) => {
  return (
    <div styleName="Log">
      <code-flask language="js">{JSON.stringify(props.data)}</code-flask>
    </div>
  )
}
