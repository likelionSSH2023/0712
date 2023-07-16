import React from 'react';

import styled from 'styled-components'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faClock,faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import { Flex_Box, Flex_Box_Icon } from '../../../Project';

const Menu = styled.div `
  height: 64px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`


const Menu_Category = styled.div `
    width: 112px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-color: ${props => props.theme.color};
`

function Main_Menu(){
    return (
        <Menu>
            <Flex_Box>
                <Menu_Category style={{borderBottom:"solid"}}>
                    <Flex_Box_Icon size ="24px" style={{marginRight:"8px"}}><FontAwesomeIcon icon={faArrowTrendUp}/></Flex_Box_Icon>
                    <div>트렌드</div>
                </Menu_Category>

                <Menu_Category style={{color:"#ACACAC"}}>
                    <Flex_Box_Icon size ="24px" style={{marginRight:"8px"}}><FontAwesomeIcon icon ={faClock}/></Flex_Box_Icon>
                    <div>트렌드</div>
                </Menu_Category>
            </Flex_Box>

            <Flex_Box>
                <Flex_Box_Icon size ="24px" style={{marginRight:"8px", color:"#ACACAC"}}><FontAwesomeIcon icon={faEllipsisVertical}/></Flex_Box_Icon>
            </Flex_Box>
        </Menu>

    )
  }
  
  export default Main_Menu