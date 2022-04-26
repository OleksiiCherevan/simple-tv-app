import LeftNavBarWithLabel from "../components/LeftNavWithLabel";
import LeftNavItem from "../components/LeftNavItem";
import Logo from "../components/Logo";
import "./App.css";

import { menu, library, general, header } from "../js/bars";
import { shows } from "../js/mochData";
import Header from "../components/Header";
import ImageCarousele from "../components/ImageCarousele";
import Search from "../components/Search";
import H1 from "../components/H1";
import BarCardFilmBig from "../components/BarCardFilmBig";

function App() {
    return (
        <div className="app">

            <div className="app-container">
                <div className="left-side">
                    <div className="logo">
                        <Logo></Logo>
                    </div>
                    <div className="left-nav-bars">
                        <LeftNavBarWithLabel {...menu}></LeftNavBarWithLabel>
                        <LeftNavBarWithLabel {...library}></LeftNavBarWithLabel>
                        <LeftNavBarWithLabel {...general}></LeftNavBarWithLabel>
                    </div>
                </div>
                <div className="main">
                    <header className="header">
                        <Header {...header}></Header>
                        <Search></Search>
                    </header>

                    <div className="content">
                        <div className="carousele">
                            <ImageCarousele {...shows}></ImageCarousele>
                        </div>
                        <div className="popular">
                            <H1>Popular on TinyMovies</H1>
                            
                            <BarCardFilmBig></BarCardFilmBig>
                        </div>
                    </div>
                </div>
                <div className="right-side"></div>
            </div>

        </div>
    );
}

export default App;
