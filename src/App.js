import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"

//componentes
import Home from "./components/home/Home"
import Followers from "./views/followers/Followers"
import SingleUser from "./views/singleuser/SingleUser"
import Repositories  from "./views/repos/Repositories"
import Following from "./views/following/Following"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element = {<Home />}  />
        <Route path="/users/:name/repos" exact element={<Repositories />}/>
        <Route path="/users/:name/followers" exact element = {<Followers />} />
        <Route path="/users/:name/following" exact element={<Following />}/>
        <Route path="/users/:userName" exact element = {<SingleUser/>} />
      </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
