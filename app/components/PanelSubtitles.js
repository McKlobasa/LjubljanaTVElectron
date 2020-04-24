import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContentOneBox from './ContentOneBox.js'
import newTek from '../newTek.js'
import TextInput from './FastTextInput.js'
import StyledPanel from './StyledPanel.js'
import Button from './Button.js'

const Title = styled.div`
`

function Panel (props) {
  const TC1 = new newTek(props.IP)
  const [leftSubtitle, setLeftSubtitle] = useState('')
  const [rightSubtitle, setRightSubtitle] = useState('')
  const [leftIsIn, setLeftIsIn] = useState(false)
  const [rightIsIn, setRightIsIn] = useState(false)
  const [bothIn, setBothIn] = useState(false)

  const handleLeftButtonIN = () => {
    TC1.setDataLink('podpisLevo', leftSubtitle)
    if (props.oneBoxOnAir) {
      TC1.triggerMacro('podpisLevoOneBoxIN')
    } else {
      TC1.triggerMacro('podpisLevoTwoBoxesIN')
    }
    setLeftIsIn(true)
  }
  const handleLeftButtonOUT = () => {
    if (props.oneBoxOnAir) {
      TC1.triggerMacro('PASICA enojna gor')
    } else {
      TC1.triggerMacro('PASICA dvojna gor')
    }
    setLeftIsIn(false)
  }
  const handleRightButtonIN = () => {
    TC1.setDataLink('podpisDesno', rightSubtitle)
    if (props.oneBoxOnAir) {
      TC1.triggerMacro('podpisDesnoOneBoxIN')
    } else {
      TC1.triggerMacro('podpisDesnoTwoBoxesIN')
    }
    setRightIsIn(true)
  } 
  const handleRightButtonOUT = () => {
    if (props.oneBoxOnAir) {
      TC1.triggerMacro('PASICA enojna gor')
    } else {
      TC1.triggerMacro('PASICA dvojna gor')
    }
    setRightIsIn(false)
  }
  const handleBothButtons = () => {
    console.log(rightIsIn)
    if ( !bothIn ) {
      TC1.setDataLink('podpisDesno', rightSubtitle)
      if (props.oneBoxOnAir) {
        TC1.triggerMacro('podpisObaOneBoxIN')
      } else {
        TC1.triggerMacro('podpisObaTwoBoxesIN')
      }
      setBothIn(true)
    } else {
      if (props.oneBoxOnAir) {
        TC1.triggerMacro('PASICA enojna gor')
      } else {
        TC1.triggerMacro('PASICA dvojna gor')
      }
      setBothIn(false)
    }
  }

  return(
    <StyledPanel>
      <Title>{props.title}</Title>
      <TextInput style={{marginLeft: 50}}text={leftSubtitle} setText={setLeftSubtitle}  maxLength={25}/>
      <Button 
        onClick={handleLeftButtonIN}
      >{'IN'}</Button>
      <Button 
        onClick={handleLeftButtonOUT}
      >{'OUT'}</Button>
      <TextInput text={rightSubtitle} setText={setRightSubtitle} maxLength={25} />
      <Button 
        onClick={handleRightButtonIN}
      >{'IN'}</Button>
      <Button 
        onClick={handleRightButtonOUT}
      >{'OUT'}</Button>
      <Button 
        onClick={handleBothButtons}
      >{ bothIn ? 'SEND BOHT OUT' : 'SEND BOTH IN' }</Button>
    </StyledPanel>

  )
}

export default Panel
