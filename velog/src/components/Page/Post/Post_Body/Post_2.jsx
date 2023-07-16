import React from 'react';
import { Post_Header, Post_Body, Post_Highlight} from '../Post'
import { Info } from '../../../../Project';


function Post_2(){
    return (
      <>
        <Post_Header>
          <h1>제목</h1>
          <Info fontSize = "16px">
              <div>Router</div>
              <div style={{margin:"8px"}}>·</div>
              <div>2023년 7월 16일</div>
          </Info>
        </Post_Header>

        <Post_Body>
          <p>이것도...</p>
        </Post_Body>
      </>
    )
  }
  
  export default Post_2