import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContentBoxTopBottom from './ContentBoxTopBottom.js'
import newTek from '../newTek.js'
import TextInput from './FastTextInput.js'
import StyledPanel from './StyledPanel.js'

const Title = styled.div`
  flex: 0.3;
`

function Panel (props) {
  const TCP1 = new newTek(props.IP)

  const data = {
    delay: 1000,
    title: '',
  }

  const CONTENT_BOX_COUNT = 4
  const [dataArray, setDataArray] = useState(Array(CONTENT_BOX_COUNT).fill(data))

  const [iteration, setIteration] = useState(0)

  const contents = useState()

  const updateGFX = (top, bottom) => {
    TCP1.triggerMacro(props.beforeMacro)
    TCP1.setDataLink(props.topDatalink, top)
    TCP1.setDataLink(props.bottomDatalink, bottom)
    TCP1.triggerMacro(props.afterMacro)
  }

  const setData = (iter, element, value) => {
    setDataArray(dataArray.map((values, i) => {
      if (i == iter) {
        return { ... values, [element]: value }
      } else {
        return values
      }
    }))
  }

  
  return(
    <StyledPanel>
      <Title>{props.title}</Title>
      { dataArray.map((data, i) => {
          return <ContentBoxTopBottom 
            titleDataLink={props.topDatalink}
            contentDataLink={props.bottomDatalink}
            title={data.title}
            setTitle={ (value) => {setData(i, 'title', value)} }
            content={data.content}
            setContent={(value) => {setData(i, 'content', value)}}
            pushAction={() => {updateGFX(data.title, data.content)}}
          />
      }) }
    </StyledPanel>

  )
}

export default Panel
