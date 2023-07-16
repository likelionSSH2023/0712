import React from 'react';
import Post_Preview from './Main_Post_Preview';


import styled from 'styled-components'
import Main_Menu from './Main_Menu';

import p3 from '../Post/Post_Body/images/3_1.png'

const Posts = styled.div `
  max-width: 1;
  width: 100%;
  margin-top: 32px;
  flex-wrap: wrap;
  display: flex;
`

function Main(){
    return (
      <div>
        <Main_Menu/>
        <Posts>
          <Post_Preview
            img = 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2020-10/sadness.jpg?itok=CzhyZiWY'
            post_id="Post_1"
            title = "Styled_Component"
            content= "먼미래에 공개됩니다..."
            time = "2023년 7월 16일"
            comment_num ="3"
            like_num ="3"
            writer ="shimseohyun"
          />
          
          <Post_Preview
            img = "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2020-10/sadness.jpg?itok=CzhyZiWY"
            post_id="Post_2"
            title = "Router"
            content= "이것도..."
            time = "2023년 7월 16일"
            comment_num ="3"
            like_num ="3"
            writer ="shimseohyun"
          />

          <Post_Preview
            img = {p3}
            post_id="Post_3"
            title = "React tHooks"
            content= "useState Increase 버튼을 누르면 item의 수가 1 증가함 Decrease 버튼을 누르면 item의 수가 1 감소함"
            time = "2023년 7월 16일"
            comment_num ="3"
            like_num ="3"
            writer ="shimseohyun"
          />

        </Posts>
      </div>
    )
  }
  
  export default Main