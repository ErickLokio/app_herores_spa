import { Route, Routes } from "react-router-dom";
import { LoginPages } from "../auth/pages/LoginPages";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return(
        <>
            <Routes>
                {/*<Route path="login" element={ <LoginPages></LoginPages> }></Route> */}

                <Route path="/login" element={ <PublicRoute><LoginPages></LoginPages></PublicRoute>}></Route>

                <Route path="/*" element= {<PrivateRoute><HeroesRoutes></HeroesRoutes></PrivateRoute>} ></Route>

                {/*<Route path="/*" element={ <HeroesRoutes></HeroesRoutes> }></Route>*/}
            </Routes>
        </>
    );
}