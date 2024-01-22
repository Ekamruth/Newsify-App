
import Root from './components/Root'
import NewsComponent from './components/NewsComponent/NewsComponent';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {path: "/", element: <Root/>, children:[
      {path:"/", element:<NewsComponent/>},
      {path:"/:category", element:<NewsComponent/>}
    ]},
  ]
  )
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
