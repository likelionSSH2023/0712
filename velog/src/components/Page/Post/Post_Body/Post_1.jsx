import React from 'react';
import { Post_Header, Post_Body, Post_Highlight} from '../Post'
import { Info } from '../../../../Project';


function Post_1(){
    return (
      <>
        <Post_Header>
          <h1>Styled_Component</h1>
          <Info fontSize = "16px">
              <div>shimseohyun</div>
              <div style={{margin:"8px"}}>·</div>
              <div>2023년 7월 16일</div>
          </Info>
        </Post_Header>

        <Post_Body>
          <p>먼미래에 공개됩니다...</p>
        </Post_Body>
      </>
    )
  }
  
  export default Post_1