import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const Input = styled.input`
  box-sizing: border-box;
  padding: 3px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  height: 100%;
  width: 80%;
  color: darkgrey;
  outline: none;
  font-size: 0.5em;
  &:focus {
    background-color: lightgrey;
  }
`
const Label = styled.label`
  color: dark grey;
  font-size: 1em;
`

function FastTextInput (props) {
  const handleChange = (event) => props.setText(event.target.value)   
  return (
    <Input type="text" value={props.text} onChange={handleChange} maxLength={`${props.maxLength || 1000}`}/>        
  )
}



export default FastTextInput
