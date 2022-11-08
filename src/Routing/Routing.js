import { createBrowserRouter } from "react-router-dom";
import AddService from "../component/pages/Add service/AddService";
import Home from "../component/pages/Home/Home";
import Login from "../component/pages/Login/Login";
import MyReview from "../component/pages/MyReview/MyReview";
import Services from "../component/pages/Services/Services";
import Signin from "../component/pages/SignIn/Signin";
import ServiceDetails from "../DynamicPage/ServiceDetails/ServiceDetails";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path : '/', element : <Main></Main>, children : [

            {path : '/',
             element : <Home></Home>,
             loader : ()=> fetch(`http://localhost:5000`)
            },

            { path :'/Services',
              element : <Services></Services>,
              loader : ()=> fetch(`http://localhost:5000/services`)
              
            },
            { path :'/Services/:id',
              element : <ServiceDetails></ServiceDetails> ,
              loader : ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
              
            },

            { path :'/Myreviews',
              element : <MyReview></MyReview>
            },

            { path :'/Addservice',
              element :<AddService></AddService>
            },
            { path :'/Login',
              element :<Login></Login>
            },
            { path :'/signin',
              element :<Signin></Signin>
            },
            
        ]
    }
])

export default router