import {Routes, Route} from "react-router-dom";

import React from 'react';
import Navigation from './routes/navigation/navigation.components';
import Money from './routes/money/money.component';

const App =() =>{
  return(
    <Routes>
      <Route path='/' element={ <Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/tags' element={<Tags/>}></Route>
        <Route path='/money' element={<Money/>}></Route>
        <Route path='/statistics' element={<Statistics/>}></Route>
      </Route>
      <Route path='*' element={<NoMatch/>}></Route>
    </Routes>
  )
}
function Home(){
  return <h2>hello world!</h2>
}
function Tags(){
  return <h2>标签</h2>
}

function Statistics(){
  return <h2>统计</h2>
}
function NoMatch(){
  return <h2>网址出错啦</h2>
}
export default App;
