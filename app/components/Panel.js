import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContentBox from './ContentBox.js'
import newTek from '../newTek.js'
import TextInput from './FastTextInput.js'
import StyledPanel from './StyledPanel.js'
import useInterval from '../hooks/useInterval.js'

const Title = styled.div`
`

function Panel (props) {
  const TCP1 = new newTek(props.IP)

  const data = {
    delay: 5000,
    title: '',
    content: '',
    isIn: true
  }
  const CONTENT_BOX_COUNT = 4
  const [dataArray, setDataArray] = useState(Array(CONTENT_BOX_COUNT).fill(data))
  const [count, setCount] = useState(0)
  const updateGFX = () => {
    if (props.onAir && props.started) {

      console.log('posiljam nekaj iz panela')
      //TCP1.triggerMacro(props.beforeMacro)
      TCP1.setDataLink(props.titleDatalink, dataArray[count].title)
      TCP1.setDataLink(props.contentDatalink, dataArray[count].content)
      //TCP1.triggerMacro(props.afterMacro)

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

  const increaseCountToNextOnAir = (init) => {
    for (let i = 1; i < CONTENT_BOX_COUNT + 1 ; i++) {
      if (dataArray[(init + i) % CONTENT_BOX_COUNT].isIn) {
        setCount((init + i) % CONTENT_BOX_COUNT)
        console.log(count)
        break
      }
    }
  }

  useInterval(() => {
    updateGFX()
    increaseCountToNextOnAir(count)
    }, dataArray[count].delay > 800 ? dataArray[count].delay : 2000 
  )
  
  useEffect(() => {
    setCount(0)
  }, [props.IP, props.started])


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
          pushAction={() => {setCount(i)}}
          delay={data.delay}
          setDelay={(value) => {setData(i, 'delay', value)}}
          isIn={data.isIn}
          setIsIn={i == 0 ? () =>{} : () => {setData(i, 'isIn', ! dataArray[i].isIn)}}
        />

      }) }
    </StyledPanel>

  )
}

export default Panel
