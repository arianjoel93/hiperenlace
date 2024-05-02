import "./MainRouter.scss"
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "../components/Layout/Layout"
const Home = lazy(() => import('../Pages/Home/Home'))
const Login = lazy(() => import("../Pages/Login/Login"))
const CreateAccount = lazy(() => import("../Pages/CreateAccount/CreateAccount"))

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <Layout />
                    }
                    children={
                        <>
                            <Route
                                path='/'
                                element={
                                    <Suspense>
                                        <Home></Home>
                                    </Suspense>
                                }
                            />
                        </>
                    }
                />
            </Routes>
            <Routes>
                <Route path="/login"
                    element={
                        <Suspense>
                            <Login></Login>
                        </Suspense>
                    }
                />
                <Route path="/crear-cuenta"
                    element={
                        <Suspense>
                            <CreateAccount/>
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter