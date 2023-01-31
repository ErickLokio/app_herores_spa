import { Navbar } from "../../ui/components/Navbar"
import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPages } from "../pages/MarvelPages";
import { DcPages } from "../pages/DcPages";
import { SearchPages } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar></Navbar>   
            <div className="container">
                <Routes>
                    <Route path="/" element={ <Navigate to={ "/marvel" }/> }></Route>
                    <Route path="marvel" element={ <MarvelPages></MarvelPages> }></Route>
                    <Route path="dc"  element={ <DcPages></DcPages> }></Route>
                    <Route path="search"  element={ <SearchPages></SearchPages> }></Route>
                    <Route path="hero/:id"  element={ <HeroPage></HeroPage> }></Route>
                </Routes>
            </div>
        </>
    )
}