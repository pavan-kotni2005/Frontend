// import logo from './logo.svg';
import './App.css';
import { SignIn } from './components/signin/signin';
import {BrowserRouter,Route,Routes} from "react-router-dom"
// import { UseStateFunction } from './components/sign in/component5';
// import { Fun } from './components/sign in/component1';
// import { Sun } from './components/sign in/component2';
// import { Events } from './components/sign in/component3';
// import { SignIn } from './components/sign in/signin';

import { SignUp } from './components/signin/signup';
import Forgotpassword   from './components/signin/forgotpassword';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/resetpassword' element={<Forgotpassword/>}/>
        </Routes>
      </BrowserRouter>
      {/* <h1>Name:pavan</h1>
      <h2>Age:19</h2>
      <Fun/>
       <UseStateFunction/>
      <Sun/>
      <Events/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
    </>
  );
}

export default App;
