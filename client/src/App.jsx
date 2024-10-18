import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Upload from './component/Upload'
import Update from './component/Update'
import Remove from './component/Remove'
import FetchAll from './component/FetchAll'
import FetchId from './component/FetchId'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/update' element={<Update/>}/>
      <Route path='/findAll' element={<FetchAll/>}/>
      <Route path='/fetchID' element={<FetchId/>}/>
      <Route path='/remove' element={<Remove/>}/>
    </Routes>
  )
}

export default App