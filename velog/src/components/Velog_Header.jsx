import { Link } from 'react-router-dom';

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Profile_Image, Flex_Box, Flex_Box_Icon } from '../Project';

import { useState } from 'react';

const Header = styled.div `
  height: 64px;
  margin: 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
`

const Theme = [ faSun,faMoon ]


function Velog_Header({ getData }){

  const [Mode, seteMode] = useState(0)
  const switchMode = () => {
    // console.log(Mode)
    if(Mode == 1){
      // console.log("1->0")
      seteMode(0)
      getData(0);
    }
    else{
      // console.log("0->1")
      seteMode(1)
      getData(1)
    }
    // console.log(Mode)
  } 
  
  return (
    <Header>
      {/* 로고, 블로그 주인 이름 */}
      <Flex_Box>
        <Link to={"/"}>velog</Link>
      </Flex_Box>

      {/* 야간모드, 게시글 찾기, 유저정보 */}
      <Flex_Box>
        <Flex_Box_Icon size = "40px" style={{marginRight:"4px"}}
          onClick={switchMode}
        >
          <FontAwesomeIcon icon ={ Theme[Mode]}/>
        </Flex_Box_Icon>

        <Flex_Box_Icon size = "40px" style={{marginRight:"4px"}}><FontAwesomeIcon icon ={faMagnifyingGlass}/></Flex_Box_Icon>
        <Profile_Image size ="40px">
          <img src='https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2020-10/sadness.jpg?itok=CzhyZiWY'></img>
        </Profile_Image>
      </Flex_Box>

    </Header>
  )
}

export default Velog_Header