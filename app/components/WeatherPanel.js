import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import newTek from '../newTek.js'
import TextInput from './FastTextInput.js'
import StyledPanel from './StyledPanel.js'
import WeatherBox from './WeatherBox.js'
import Button from './Button.js'
import useInterval from '../hooks/useInterval.js'

const Title = styled.div`
`
const ButtonPanel=styled.div`
  display: flex;
  flex-direction: column;
`

function Panel (props) {
  const TC1 = new newTek(props.IP)
  const [displayDay, setDisplayDay] = useState(false)

  const data = {
    icon: 'clear',
    lowTemperature: 20,
    highTemperature: 20
  }
  const CONTENT_BOX_COUNT = 3
  const [dataArray, setDataArray] = useState(Array(CONTENT_BOX_COUNT).fill(data))


  const updateGFX = () => {
    dataArray.map((data, iter) => {
      TC1.triggerMacro(selectIcon(data.icon, iter + 1))
    })
  }
  useInterval(() => {
    if (displayDay) {
      TC1.setDataLink('day1', 'dopoldan')
      TC1.setDataLink('day2', 'popoldne')
      TC1.setDataLink('day3', 'zvečer')
      TC1.setDataLink('firstTemp', `${dataArray[0].highTemperature}°C`)
      TC1.setDataLink('secondTemp', `${dataArray[1].highTemperature}°C`)
      TC1.setDataLink('thirdTemp', `${dataArray[2].highTemperature}°C`)
      dataArray.map((data, iter) => {
        TC1.triggerMacro(selectIcon(data.icon, iter + 1))
      })
      setDisplayDay(false)
    } else {
      TC1.setDataLink('day1', `${selectDescription(dataArray[0].icon)}`)
      TC1.setDataLink('day2', `${selectDescription(dataArray[1].icon)}`)
      TC1.setDataLink('day3', `${selectDescription(dataArray[2].icon)}`)
      TC1.setDataLink('firstTemp', `${dataArray[0].highTemperature}°C`)
      TC1.setDataLink('secondTemp', `${dataArray[1].highTemperature}°C`)
      TC1.setDataLink('thirdTemp', `${dataArray[2].highTemperature}°C`)

      dataArray.map((data, iter) => {
        TC1.triggerMacro(selectIcon(data.icon, iter + 1))
      })
      setDisplayDay(true)
    }
  }, 4000)

  const selectDescription = (weather) => {
    let iconText = ''
    switch (weather) {
      case 'sončno' :
        iconText = `sončno`
        break;
      case 'delno oblačno' :
        iconText = `oblačno`
        break;
      case 'oblačno' :
        iconText = `oblačno`
        break;
      case 'rahel dež' :
        iconText = `dež`
        break;
      case 'dež' :
        iconText = `dež`
        break;
      case 'megla' :
        iconText = `megleno`
        break;
      case 'rahel sneg' :
        iconText = `sneg`
        break;
      case 'sneg' :
        iconText = `sneg`
        break;
    }
    return iconText
  }

  const selectIcon = (weather, day) => {
    let iconText = ''
    switch (weather) {
      case 'sončno' :
        iconText = `SLIKA${day}1`
        break;
      case 'delno oblačno' :
        iconText = `SLIKA${day}2`
        break;
      case 'oblačno' :
        iconText = `SLIKA${day}3`
        break;
      case 'rahel dež' :
        iconText = `SLIKA${day}4`
        break;
      case 'dež' :
        iconText = `SLIKA${day}5`
        break;
      case 'megla' :
        iconText = `SLIKA${day}6`
        break;
      case 'rahel sneg' :
        iconText = `SLIKA${day}7`
        break;
      case 'sneg' :
        iconText = `SLIKA${day}8`
        break;
    }
    return iconText
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
  const updateData = () => {

  }

  return(
    <StyledPanel>
      <Title>{props.title}</Title>
      { dataArray.map((data, i) => {
        return <WeatherBox 
          highDatalink={props.highDatalink[i]}
          lowDatalink={props.lowDatalink[i]}
          icon={data.icon}
          setIcon={(value) => {setData(i, 'icon', value)}}
          highTemperature={data.highTemperature}
          setHighTemperature={(value) => {setData(i, 'highTemperature', value)}}
          lowTemperature={data.lowTemperature}
          setLowTemperature={(value) => {setData(i, 'lowTemperature', value)}}
        />
      }) }
      <ButtonPanel>
        <Button onClick={updateGFX} style={{flex:'1'}}>SEND</Button>
        <Button onClick={updateData} style={{flex:'1', paddingLeft: 5}}>PULL DATA</Button>
      </ButtonPanel>
    </StyledPanel>

  )
}

export default Panel
