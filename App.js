import './App.css';
// import { useState } from 'react';

import { BrowserRouter as Router , Route ,  Routes , Navigate   } from 'react-router-dom';
// Admin Dashboard Start
import Main from './Pages/Main'
import Dashboard from './Pages/Dashboard';
import Todo from './Pages/Todo';
import AdminRegistertion from './Pages/AdminRegistertion';
import AdminAccounts from './Pages/AdminAccounts';
import AdminEmployee from './Pages/AdminEmployee';
import AdminProjects from './Pages/AdminProjects';
import AdminTimeline from './Pages/AdminTimeline';
import AdminInnerHome from './Pages/AdminInnerHome';
import AdminCalendars from './Pages/AdminCalendars';
import AdminInvoice from './Pages/AdminInvoice';
import AdminNotification from './Pages/AdminNotification';
import AdminMessage from './Pages/AdminMessage';
import Register from './Pages/Register';
import Login from './Pages/Login'
import EditProfile from './Components/EditProfile/EditProfile';
// Admin Dashboard End
// User Dashboard Start


// User Dashboard End


function App() {
 



  return (
    <>
      <Router>
      <Routes>
      <Route path='/login'   element = {<Login  />} />      
      <Route path='/register' element = {<Register/>} />


      <Route element = {<Main   />}>
      <Route path='/dashboard' element = {<Dashboard/>}>
      <Route path='' element = {<AdminInnerHome/>}/>
      <Route path='editProfile' element = {<EditProfile/>}/>
      <Route path='todo' element = {<Todo  />} />
      <Route path='registertion' element = {<AdminRegistertion/>}  />
      <Route path='accounts' element = {<AdminAccounts/>} />
      <Route path='employee' element = {<AdminEmployee/>} />
      <Route path='projects' element = {<AdminProjects/>} />
      <Route path='timeline' element = {<AdminTimeline/>} />
      <Route path='calendars' element = {<AdminCalendars/>} />
      <Route path='invoice' element = {<AdminInvoice/>} />
      <Route path='notification' element = {<AdminNotification/>} />
      <Route path='message' element = {<AdminMessage/>} />
      </Route>
      </Route>


      <Route path='*'   element = {<Navigate to = '/login'  />} />  
  
     
      

  
  
      </Routes>
      </Router>

    </>
  );
}

export default App;
