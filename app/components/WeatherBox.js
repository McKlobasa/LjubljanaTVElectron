import React from 'react'
import styled from 'styled-components'
import TextInput from './FastTextInput.js'
import TextArea from './FastTextArea.js'
import Button from './Button.js'

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-rows: 30% 30% auto;
  grid-template-columns: 30% auto;
  color: var(--mainColor1);
  font-size: 1em;
  column-gap: 10px;
  row-gap: 15px;
  padding: 20px;
`
const LowTitle = styled.div`
  font-size: 0.5em;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: end;
`
const LowTemperature = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`
const HighTitle = styled.div`
  font-size: 0.5em;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: end;
`
const HighTemperature = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`
const IconTitle = styled.div`
  font-size: 0.5em;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  justify-self: end;
`
const Icon = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
`
const IconSelector = styled.input`
  border: 1px solid lightgrey;
  border-radius: 5px;
  text-align : left;
  color: var(--mainColor1);
  padding: 5px;
  font-size: 0.7em;
  width: 200px;
  background-color: white;
  outline: none;
  &:focus {
    background-color: lightgrey;
  }
`
const NumberInput = styled.input`
  border: 1px solid lightgrey;
  border-radius: 5px;
  text-align : left;
  color: var(--mainColor1);
  padding: 5px;
  font-size: 0.7em;
  width: 200px;
  background-color: white;
  outline: none;
  &:focus {
    background-color: lightgrey;
  }
`
function ContentBox (props) {
  const icons = [
    'sončno',
    'delno oblačno',
    'oblačno',
    'rahel dež',
    'dež',
    'megla',
    'rahel sneg',
    'sneg'
  ]
  return(
    <Container>
      <IconTitle>icon</IconTitle>
      <HighTitle>{props.highDatalink}</HighTitle>
      <Icon>
        <IconSelector 
          type={"text"} 
          list={"icons"} 
          onChange={(event) => {
            props.setIcon(event.target.value)
          }}
        />
        <datalist id={"icons"}>{
          icons.map((value, iter) => <option value={value} />)
        }</datalist>
      </Icon>
      <HighTemperature>
        <TextInput text={props.highTemperature} setText={props.setHighTemperature} type={'number'}/>
      </HighTemperature>
    </Container>
  )
}

export default ContentBox
