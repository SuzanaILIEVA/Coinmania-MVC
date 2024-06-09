import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./View/LoginPage"
import HeaderView from "./View/HeaderView"
import MainPageController from "./Controller/MainPageController"
import axios from "axios"
import DetailPageController from "./Controller/DetailPageController"

axios.defaults.baseURL = "https://api.coincap.io/v2"

const App = () => {
  return (
   <BrowserRouter>
   <HeaderView/>
   <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/home" element={<MainPageController/>}/>
    <Route path="/coin/:id" element={<DetailPageController/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
