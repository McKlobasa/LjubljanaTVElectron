import styles from './App.css'
import React, { useState, useEffect } from 'react'
import TextInput from './FastTextInput.js'
import Panel from './Panel.js'
import PanelTopBottom from './PanelTopBottom.js'
import PanelOneBox from './PanelOneBox.js'
import PanelOneLine from './PanelOneLine.js'
import WeatherPanel from './WeatherPanel.js'
import PanelSubtitles from './PanelSubtitles.js'

import newTek from '../newTek.js'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --mainColor1: #020024;
    --mainColor2: #30c4ae;
    --textColor: #757575;
  }
  #root {
    height: 100%
  }
  body {
    font-family: sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
    position: relative;
    overflow: scroll;
    font-size: 1.5em;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,196,174,1) 100%);
  }
  html {
    height: 100%;
    width: 100%;
    margin: 0;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,196,174,1) 100%);
`
const AppContainer = styled.div`
  color: var(--mainColor1);
  height: 100%;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,196,174,1) 100%);
`
const Button = styled.button`
  flex: 1; 
  width: 100px;
  background-color: var(--mainColor1); 
  border: none; 
  border-radius: 5px;
  font-size: 0.5em; 
  font-weight: bold;
  color: white;
  outline: none;
  flex-grow: 1;
  padding: 5px;
  margin-left: 20px;
  cursor: pointer;


  &: active {
    background-color: var(--mainColor2);
    color: white;
  }
`

export default function App (props) {
  const [IP, setIP] = useState('192.168.250.161')
  const [oneBoxOnAir, setOneBoxOnAir] = useState(false)
  const [started, setStarted] = useState(false)
  const TC1 = new newTek(IP)
  return (
    <AppContainer>
      <GlobalStyle />
      <div style={{display: 'flex', boxSizing: 'border-box', padding: 15}}>
        <div>{'IP => '}</div>
        <TextInput text={IP} setText={setIP} />
        <Button onClick={() => {
          if (started) {
            setStarted(false)
          } else {
            setStarted(true)
          }
        }}>{started ? 'STOP' : 'START'}</Button>
      </div>
      <Container>
        <PanelSubtitles
          oneBoxOnAir={oneBoxOnAir}
          IP={IP}
          title={'PODPISI'}
          inMacroIsOne={'PASICA enojna gor'}
          inMacroIsTwo={'PASICA enojna gor'}
          outMacroIsOne={'PASICA dvojna gor'}
          outMacroIsTwo={'PASICA dvojna gor'}
          leftDatalink={'oneBoxTop'}
          rightDatalink={'oneBoxBottom'}
        />
        <WeatherPanel 
          onAir={! oneBoxOnAir}
          started={started}
          IP={IP}
          title={'WEATHER'}
          highDatalink={['highDatalink1', 'highDatalink2', 'highDatalink3']}
          lowDatalink={['lowDatalink1', 'lowDatalink2', 'lowDatalink3']}
          tempDatalinks={['firstTemp', 'secondTemp', 'thirdTemp']}
          iconMacroHeader={'setIcon_'}
        />
        <PanelTopBottom
          IP={IP}
          title={'GREEN BOX 2 LINE'}
          beforeMacro={'greenBox2lineBefore'}
          afterMacro={'greenBox2lineBefore'}
          topDatalink={'greenBoxTitle'}
          bottomDatalink={'greenBoxContent'}
          
        />
        <Panel 
          onAir={! oneBoxOnAir}
          started={started}
          IP={IP}
          title={'LEFT BOX'}
          beforeMacro={'leftBoxBefore'}
          afterMacro={'leftBoxAfter'}
          titleDatalink={'leftBoxTitle'}
          contentDatalink={'leftBoxContent'}
        />
        <Panel 
          onAir={! oneBoxOnAir}
          started={started}
          IP={IP}
          title={'RIGHT BOX'}
          beforeMacro={'rightBoxBefore'}
          afterMacro={'rightBoxAfter'}
          titleDatalink={'rightBoxTitle'}
          contentDatalink={'rightBoxContent'}
        />
        <PanelOneBox
          onAir={oneBoxOnAir}
          setOnAir={setOneBoxOnAir}
          IP={IP}
          title={'ONE BOX'}
          inMacro={'PASICA enojna gor'}
          outMacro={'PASICA dvojna gor'}
          topDatalink={'oneBoxTop'}
          bottomDatalink={'oneBoxBottom'}
        />
        <PanelOneLine 
          onAir={true}
          started={started}
          IP={IP}
          title={'ONE LINE'}
          beforeMacro={'oneLineBefore'}
          afterMacro={'oneLineAfter'}
          contentDatalink={'oneLineContent'}
        />
        <div>
          <button onClick={() => {TC1.triggerMacro('leftBoxBefore')}} >leftBoxBefore</button>
          <button onClick={() => {TC1.triggerMacro('leftBoxAfter')}} >leftBoxAfter</button>
          <button onClick={() => {TC1.triggerMacro('rightBoxBefore')}} >rightBoxBefore</button>
          <button onClick={() => {TC1.triggerMacro('rightBoxAfter')}} >rightBoxAfter</button>
          <button onClick={() => {TC1.triggerMacro('oneBoxIn')}} >oneBoxIn</button>
          <button onClick={() => {TC1.triggerMacro('oneBoxOut')}} >oneBoxOut</button>
          <button onClick={() => {TC1.triggerMacro('SLIKA31')}} >SLIKA11</button>
          <button onClick={() => {TC1.triggerMacro('SLIKA32')}} >SLIKA12</button>
          <button onClick={() => {TC1.triggerMacro('SLIKA33')}} >SLIKA13</button>
          <button onClick={() => {TC1.triggerMacro('SLIKA34')}} >SLIKA14</button>
          <button onClick={() => {TC1.triggerMacro('SLIKA35')}} >SLIKA15</button>
          <button onClick={() => {TC1.triggerMacro('SLIKA36')}} >SLIKA16</button>
          <button onClick={() => {TC1.triggerMacro('SLIKA37')}} >SLIKA17</button>
          <button onClick={() => {TC1.triggerMacro('SLIKA38')}} >SLIKA18</button>
          <button onClick={() => {TC1.triggerMacro('subtitleOUT')}} >subtitleOUT</button>
          <button onClick={() => {TC1.triggerMacro('podpisLevoOneBoxIN')}} >podpisLevoOneBoxIN</button>
          <button onClick={() => {TC1.triggerMacro('podpisLevoTwoBoxesIN')}} >podpisLevoTwoBoxesIN</button>
          <button onClick={() => {TC1.triggerMacro('podpisDesnoOneBoxIN')}} >podpisDesnoOneBoxIN</button>
          <button onClick={() => {TC1.triggerMacro('podpisDesnoTwoBoxesIN')}} >podpisDesnoTwoBoxesIN</button>
          <button onClick={() => {TC1.triggerMacro('podpisObaOneBoxIN')}} >podpisObaOneBoxIN</button>
          <button onClick={() => {TC1.triggerMacro('podpisObaTwoBoxesIN')}} >podpisObaTwoBoxesIN</button>

        </div>
      </Container>
    </AppContainer>
  )
}
