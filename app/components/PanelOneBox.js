import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContentOneBox from './ContentOneBox.js'
import newTek from '../newTek.js'
import TextInput from './FastTextInput.js'
import StyledPanel from './StyledPanel.js'

const Title = styled.div`
`

function Panel (props) {
  const TC1 = new newTek(props.IP)
  const data = {
    title: '',
    content: '',
    onAir: false
  }
  const CONTENT_BOX_COUNT = 5
  const [dataArray, setDataArray] = useState(Array(CONTENT_BOX_COUNT).fill(data))

  const [iteration, setIteration] = useState(0)

  const handleIn = (iter) => {
    props.setOnAir(true)
    TC1.setDataLink(props.topDatalink, dataArray[iter].title)
    TC1.setDataLink(props.bottomDatalink, dataArray[iter].content)
    TC1.triggerMacro(props.inMacro)

  }
  const handleOut = (iter) => {
    props.setOnAir(false)
    TC1.triggerMacro(props.outMacro)

  }
  const buttonAction = (iter) => {
    if ( !dataArray[iter].onAir) {
      handleIn(iter)
      setData(iter, 'onAir', true)
    } else {
      handleOut(iter)
      setData(iter, 'onAir', false)
    }
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
        return <ContentOneBox 
          titleDataLink={props.topDatalink}
          contentDataLink={props.bottomDatalink}
          title={data.title}
          setTitle={ (value) => {setData(i, 'title', value)} }
          content={data.content}
          setContent={(value) => {setData(i, 'content', value)}}
          onAir={data.onAir}
          buttonActionIn={() => handleIn(i)}
          buttonActionOut={() => handleOut(i)}
        />
      })}
    </StyledPanel>

  )
}

export default Panel
