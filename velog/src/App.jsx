import { Outlet } from 'react-router-dom'


import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './Theme'

const Velog = styled.div `
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Velog_Body = styled.div `
  flex-grow: 1;
  
  display: flex;
  flex-direction: column;
  margin: 0px 16px;
  /* flex-wrap: wrap; */
`

import Velog_Header from './components/Velog_Header'
import { useState } from 'react'

const Theme =[lightTheme,darkTheme]

function App() {

  const [Mode, setMode] = useState(0)

  const getData = (newMode) => {
    setMode(newMode);
  }


  return (
    <>
    <ThemeProvider theme ={Theme[Mode]}>

      <Velog>
        <Velog_Header getData={getData}/>

        <Velog_Body>
          <Outlet/>
        </Velog_Body>

      </Velog>

    </ThemeProvider>
    </>
  )
}

export default App
