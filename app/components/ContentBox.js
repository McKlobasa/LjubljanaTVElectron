import React from 'react'
import styled, {css} from 'styled-components'
import TextInput from './FastTextInput.js'
import TextArea from './FastTextArea.js'
import Button from './Button.js'

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: 20% 20% 20% auto;
  color: var(--mainColor1);
  font-size: 1em;
  column-gap: 10px;
  row-gap: 15px;
  padding: 20px;
`
const TitleName = styled.div`
  font-size: 0.5em;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: end;
`
const TitleContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`
const ContentName = styled.div`
  font-size: 0.5em;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: end;
`
const ContentContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 5;
`
const Push = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
`
const Delay = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
`
const ToggleButton = styled.button`
  width: 40px;
  height: 20px;
  flex: 1; 
  background-color: var(--mainColor2); 
  border: none; 
  border-radius: 5px;
  font-size: 1em; 
  font-weight: bold;
  color: var(--mainColor1);
  outline: none;
  flex-grow: 1;
  padding: 5px;
  cursor: pointer;
`

function ContentBox (props) {
  return(
    <Container>
      <TitleName>
        <ToggleButton onClick={() => {props.setIsIn(! props.isIn)}} selected={props.isIn} >{props.isIn? 'IN': 'OUT'}</ToggleButton>
        {props.titleDataLink}
      </TitleName>
      <TitleContent><TextArea  text={props.title} setText={props.setTitle} maxLength={15}/></TitleContent>
      <ContentName>{props.contentDataLink}</ContentName>
      <ContentContent><TextArea  text={props.content} setText={props.setContent} /></ContentContent>
      <Push onClick={props.pushAction}><Button>PUSH</Button></Push>
      <Delay><TextInput text={props.delay} setText={props.setDelay}/></Delay>
    </Container>
  )
}

export default ContentBox
