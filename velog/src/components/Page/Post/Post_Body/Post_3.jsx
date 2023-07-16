import React from 'react';
import { Post_Header, Post_Body, Post_Highlight} from '../Post'
import { Info } from '../../../../Project';

import p1 from './images/3_1.png'
import p2 from './images/3_2.png'
import p3 from './images/3_3.png'
import p4 from './images/3_4.png'
import p5 from './images/3_5.png'
import p6 from './images/3_6.png'
import p7 from './images/3_7.png'
import p8 from './images/3_8.png'
import p9 from './images/3_9.png'
import p10 from './images/3_10.png'
import p11 from './images/3_11.png'
import p12 from './images/3_12.png'
import p13 from './images/3_13.png'
import p14 from './images/3_14.png'
import p15 from './images/3_15.png'



function Post_3(){
    return (
      <>
        <Post_Header>
          <h1>React Hooks</h1>
          <Info fontSize = "16px">
              <div>shimseohyun</div>
              <div style={{margin:"8px"}}>·</div>
              <div>2023년 7월 16일</div>
          </Info>
        </Post_Header>

        <Post_Body>
          <h1>useState</h1>
          <img src={p1}/>
          <p>
            Increase 버튼을 누르면 item의 수가 1 증가함<br/>
            Decrease 버튼을 누르면 item의 수가 1 감소함<br/>
          </p>

          <h2>useInput</h2>
          <p>기본적으로 input을 업로드함</p>
          <img src={p2}/>
          <p>
            {'{'}...name{'}'} 사용시, name안에 있는 모든 것들을 반환함 <br/>
            {'{'}...name{'}'}과, value = {'{'}name.value{'}'} onChange = {'{'}name.onChage{'}'}는 같은 의미
          </p>
          <p><strong>유효성 검사하는법</strong></p>
          <img src={p3}/>
          <p>
            vaildator type이 function이면(value의 길이기 10보다 작으면) willUpdate에 vaildator 결과를 업로드<br/>
            <br/>
            <Post_Highlight color = "#ACACAC">
            {'>'} 다른예시<br/>
            value.includes("@")  : @를 포함하면 동작하지 않는다.</Post_Highlight>
          </p>

          <h2>useTabs</h2>
          <img src={p4}/>
          <p>
            <Post_Highlight color = "#ACACAC">
            * Array.isArayy(a) a가 배열인지 확인하는 함수<br/><br/>
            </Post_Highlight>
            index는 0 1을 가지고 있다.<br/>
            모든 버튼은 onClick를 가지고, 클릭 시 changeItem의 index는 index 안의 값인 0이나 1으로 바뀐다.<br/>
            seCuttrentIndex는 State를 바꾸고, currentItem의 값을 바꾸어 새로고침하게 된다.<br/>
          </p>

          <h1>useEffect</h1>
          <img src={p5} />

          <h2>useTitle</h2>
          <img src={p6} />
          <p>
            titleUpdater를 실행하면 useTitle을 실행하고, useState로 인해 title이 변경된다.
            title이 변경되면 useEffect가 실행되고, title태그 내부 텍스트는 "home"으로 변경 된다.
          </p>

          <h2>useClick</h2>
          <img src={p7} />
          <p> 
            <Post_Highlight color = "#ACACAC">useRef는 QuerySelector 과 같은 역할을 한다.<br/></Post_Highlight>
            onClick의 type이 function 일 경우는, componentDidMount와 componentDidUpdate 일 경우라고 정의할 수 있다.<br/>
            retun()의 경우, componentWillUnmount 경우이다.<br/>
          </p>

          <h2>useFadeIn</h2>
          <p>
            자동으로 서서히 나타나는 애니메이션, 에니메이션을 훅에 넣는 방법의 대표 예제
          </p>
          <img src={p11} />

          <h2>useNetwork</h2>
          <p>
            online offline 확인하는 함수 접속상태를 h1에 띄운다.
          </p>
          <img src={p12} />

          <h2>useScroll</h2>
          <p>
            유저가 무언가를 놓쳤을때, 스크롤시 색상을 바꿀 떄 등 사용한다
          </p>
          <img src={p13} />

          <h2>useFullscreen</h2>
          <p>
            이미지를 FullScreen으로 만든다. <br/>
            해당함수는 호환성 문제가 있어 많은 경우를 나누어주어야한다.
          </p>
          <img src={p14} />
          <p>
            이런식으로 나누어주면 됨.
          </p>


          <h2>useNotification</h2>
          <p>
            알람을 띄움. <br/>
            API를 사용한다
          </p>
          <img src={p15} />
          <p>
            <Post_Highlight color = "#ACACAC">
            * 윈도우의 경우 어떻게 보이는지 모르겠음...<br/><br/>
            </Post_Highlight>
          </p>

          <h2>useAxios</h2>
          <p>
            import axios from "axios";<br/>
            HTTP Request를 만든다.<br/>
            default URL 설정 가능
          </p>


          <h2>useBeforeLeave</h2>
          <p>사용하고 있는 탭을 종료하기 전 화인을 받는 함수</p>
          <img src={p10} />

          <h1>+</h1>
          <p>하단에 기술될 것들은 useState와 useEffect를 사용하지 않기 때문에 hook은 아니다.</p>
          
          <h2>useConfirm</h2>
          
          <p>이벤트를 실행하기 전 사용자에게 확인을 받는 함수</p>
          <img src={p8} />
          <h2>usePreventLeave</h2>
          <p>사용하고 있는 창을 종료하기 전 화인을 받는 함수</p>
          <img src={p9} />
        </Post_Body>
      </>
    )
  }
  
  export default Post_3