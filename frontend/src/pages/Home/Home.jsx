import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'
import AppDownload from '../../components/AppDownload/AppDownload'
import Navbar from '../../components/Navbar/Navbar'
const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}></FoodDisplay>
        <AppDownload></AppDownload>
        <Footer></Footer>
    </div>
  )
}

export default Home