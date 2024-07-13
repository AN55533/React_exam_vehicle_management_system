import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
// import NotFoundPage from "./pages/NotFoundPage"
import MainLayout from "./Layout/MainLayout"
import AuthLayout from "./Layout/AuthLayout"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import VehicleCards from "./pages/VehicleCards"
import AddVehiclePage from "./pages/AddVehiclePage"

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<AuthLayout />} >
                    <Route index element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignupPage />} />
                </Route>

                <Route path="/" element={<MainLayout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/vehicle_details" element={<VehicleCards />} />
                    <Route path="/add-vehicledetails" element={<AddVehiclePage />} />
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Route>
            </>
        )
    )

    return (

        <>

            <RouterProvider router={router} />

        </>

    )
}

export default App
