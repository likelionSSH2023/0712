import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Main from './components/Page/Main/Main';
import Post from './components/Page/Post/Post';
import Post_1 from './components/Page/Post/Post_Body/Post_1';
import Post_2 from './components/Page/Post/Post_Body/Post_2';
import Post_3 from './components/Page/Post/Post_Body/Post_3';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path:'', element: <Main/>},
            {path:'post',element: <Post/>,children:[
                {path:"postId",element:<Post/>}
            ]},

            {path:'post_1', element:<Post_1/>},
            {path:'post_2', element:<Post_2/>},
            {path:'post_3', element:<Post_3/>},
        ]
    }
])

export default router;