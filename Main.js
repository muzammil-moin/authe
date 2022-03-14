import React    from 'react'
import { Outlet , useLocation , Navigate  } from 'react-router-dom'

const Main = () => {
 
     const location = useLocation();

  
   
    return (
        <>
     {
         location.state == "Admin" ? 
         <Outlet/> : <Navigate to={'/login'} />
     }
        
     
           
    

    
        </>

    )
}

export default Main