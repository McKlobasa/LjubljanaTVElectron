import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContentBox from './ContentBox4Line.js'
import newTek from '../newTek.js'
import TextInput from './FastTextInput.js'
import StyledPanel from './StyledPanel.js'

const Title = styled.div`
`

function Panel (props) {
  const TCP1 = new newTek(props.IP)

  const data = {
    delay: 1000,
    title: '',
    content: ''
  }
  const CONTENT_BOX_COUNT = 2
  const [dataArray, setDataArray] = useState(Array(CONTENT_BOX_COUNT).fill(data))
  const [iteration, setIteration] = useState(0)
  const updateGFX = () => {
    if (props.onAir && props.started) {

      TCP1.triggerMacro(props.beforeMacro)
      TCP1.setDataLink(props.titleDatalink, dataArray[iteration].title)
      TCP1.setDataLink(props.contentDatalink, dataArray[iteration].content)
      TCP1.triggerMacro(props.afterMacro)

      if (iteration < CONTENT_BOX_COUNT - 1) setIteration(iteration + 1)
      else setIteration(0)
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

  
  useEffect(() => {
    setIteration(0)
  }, [props.IP, props.started])

  useEffect(() => {   
    const interval = setInterval(updateGFX, 
      Number(dataArray[iteration].delay) > 290 ? 
      Number(dataArray[iteration].delay) : 
      3000)   
    return () => clearInterval(interval)   
  })

  return(
    <StyledPanel>
      <Title>{props.title}</Title>
      { dataArray.map((data, i) => {
        return <ContentBox 
          titleDataLink={props.titleDatalink}
          contentDataLink={props.contentDatalink}
          title={data.title}
          setTitle={ (value) => {setData(i, 'title', value)} }
          content={data.content}
          setContent={(value) => {setData(i, 'content', value)}}
          pushAction={() => {setIteration(i)}}
          delay={data.delay}
          setDelay={(value) => {setData(i, 'delay', value)}}
        />

      }) }
    </StyledPanel>

  )
}

export default Panel
