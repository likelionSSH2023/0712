import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

import { Profile_Image, Info, SubInfo } from '../../../Project';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Post_Preview_Box = styled(Link)`
  width: 320px;
  border-radius: 4px;
  margin: 16px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  /* transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s; */
  
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
`

const Post_Preview_Image = styled.div`
    position: relative;
    width: 100%;
    height: 167px;

    img{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
`

const Post_Preview_Body = styled.div`
    height: 133px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    /* justify-content: ; */

    h4{  /* 제목 */
        font-size: 16px;
        margin-bottom: 4px;
    }
    p{   /* 내용 */
        font-size: 14px;
        height: 64px;
        margin-bottom: 24px;
        line-height: 1.5;
    }

`
const Post_Preview_Footer = styled.div`
    padding: 10px 16px;
    border-top: 1px solid #F1F3F5;
    font-size: 12px;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
`
function Post_Preview(props){
    return (
    <Post_Preview_Box to= {props.post_id}>
        <Post_Preview_Image>
            <img src={props.img}/>
        </Post_Preview_Image>

        <Post_Preview_Body>
            <h4>{props.title}</h4> 
            <p>{props.content}</p> 
            <SubInfo>
                <div>{props.time}</div>
                <div style={{margin:"4px"}}>·</div>
                <div>{props.comment_num}</div>
            </SubInfo> 
        </Post_Preview_Body>

        <Post_Preview_Footer>
            <Info>
                <Profile_Image size ="24px" style={{marginRight:"8px"}}>
                    <img src='https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2020-10/sadness.jpg?itok=CzhyZiWY'></img>
                </Profile_Image>
                <div style={{color:"#ACACAC", marginRight:"4px"}}>by</div>
                <div>{props.writer}</div>
            </Info>
            <Info>
                <div style={{marginRight:"8px"}}><FontAwesomeIcon icon ={faHeart}/></div>
                <div>{props.like_num}</div>
            </Info>
        </Post_Preview_Footer>
    </Post_Preview_Box>

    )
  }
  
  export default Post_Preview

  