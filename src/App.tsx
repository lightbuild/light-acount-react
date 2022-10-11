import {Routes, Route} from "react-router-dom";

import React from 'react';
import Navigation from './routes/navigation/navigation.components';
import Money from './routes/money/money.component';
import Tags from './routes/tags/tags.component';

const App =() =>{
  return(
    <Routes>
      <Route path='/' element={ <Navigation/>}>
        <Route index element={<Money/>}></Route>
        <Route path='/tags/*' element={<Tags/>}></Route>
        <Route path='/statistics' element={<Statistics/>}></Route>
      </Route>
      <Route path='*' element={<NoMatch/>}></Route>
    </Routes>
  )
}

function Statistics(){
  return <h2>统计</h2>
}
function NoMatch(){
  return <h2>网址出错啦</h2>
}
export default App;
