import React from 'react'
import styled from 'styled-components'
import TextInput from './FastTextInput.js'
import TextArea from './FastTextArea.js'
import Button from './Button.js'

const Container = styled.div`
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: 30% 30% auto;
  color: var(--mainColor1);
  font-size: 1em;
  column-gap: 10px;
  row-gap: 15px;
  padding: 20px;
`
const Top = styled.div`
  font-size: 0.5em;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: end;
`
const TopContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`
const Bottom = styled.div`
  font-size: 0.5em;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: end;
`
const BottomContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`
const InButton = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  justify-self: end;
`
const OutButton = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  justify-self: start;
`

function ContentBox (props) {
  return(
    <Container>
      <Top>{props.titleDataLink}</Top>
      <TopContent><TextArea  text={props.title} setText={props.setTitle} /></TopContent>
      <Bottom>{props.contentDataLink}</Bottom>
      <BottomContent><TextArea  text={props.content} setText={props.setContent} /></BottomContent>
      <InButton onClick={props.buttonActionIn}><Button>{'IN'}</Button></InButton>
      <OutButton onClick={props.buttonActionOut}><Button>{'OUT'}</Button></OutButton>
    </Container>
  )
}

export default ContentBox
