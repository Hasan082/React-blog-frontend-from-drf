import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; 
import Home from '../pages/home';
import Detail from '../pages/Detail';

const router = createBrowserRouter([
    {

        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail/",
                element: <Detail />
            }
        ]
    }
])


export default router;