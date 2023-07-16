import React from 'react';

import styled from 'styled-components'

import { Info } from '../../../Project';



export const Post_Header = styled.div`
  margin: 88px 187.5px 0px 187.5px;
  display: flex;
  flex-direction: column;
  h1{
    font-size: 48px;
    margin-bottom: 32px;
  }
`

export const Post_Body = styled.div`
  margin: 80px 177.5px 0px 177.5px;
  display: flex;
  flex-direction: column;
  
  h1{
    margin: 26.8px 0px 16px 0px;
    font-size: 40px;
  }
  h2{
    margin: 26.5px 0px 16px 0px;
    font-size: 32px;
  }
  p{
    margin: 18px 0px;
    font-size: 18px;
    line-height: 30.5px;
  }

  & strong{
    font-weight: 800;
  }
  img{
    margin: 48px 0px;
  }

`
export const Post_Highlight = styled.span`
  color : ${props => props.color};
`

function Post(){
    return (
      <>
        <Post_Header>
          <h1>제목</h1>
          <Info fontSize = "16px">
              <div>작성자</div>
              <div style={{margin:"8px"}}>·</div>
              <div>날짜</div>
          </Info>
        </Post_Header>


        <Post_Body>

        </Post_Body>
      </>
    )
  }
  
  export default Post