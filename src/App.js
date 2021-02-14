import './App.css';
import MainPart from "./components/MainPage/MainPart";
import {Redirect, BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import ServicePage from "./components/Services/ServicePage";
import AdvertisementPage from "./components/AdvertisementPage/AdvertisementPage";
import DirectoryPage from "./components/DirectoryPage/DirectoryPage";
import ForumPage from "./components/ForumPage/ForumPage";
import LoginPage from "./components/LoginPage/LoginPage";


function App() {

    return (<BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/">
                    <Redirect to="/main"/>
                </Route>
                <Route path='/main' render={() => <MainPart/>}/>
                <Route path='/service' render={() => <ServicePage/>}/>
                <Route path='/advertisement' render={() => <AdvertisementPage/>}/>
                <Route path='/directory' render={() => <DirectoryPage/>}/>
                <Route path='/forum' render={() => <ForumPage/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>


            </div>
        </BrowserRouter>


    );
}

export default App;

