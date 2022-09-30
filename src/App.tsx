import {Routes, Route} from "react-router-dom";

import React from 'react';

const App =() =>{
  return(
    <Routes>
      <Route path='/' element={ <Home/>}></Route>
    </Routes>
  )
}
function Home(){
  return <h2>hello world!</h2>
}

export default App;
