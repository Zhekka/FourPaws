import React from 'react'
import '../../App.css'
import MainPage from "./MainPage";
import Service from "./Service/Service";
import About from "./About/About";

export default function MainPart(){
    return(<div>
        <div>
            <div className="back">
                <MainPage/>
            </div>
            <Service/>
            <div className="about__back">
                <About/>
            </div>


        </div>
    </div>)
}