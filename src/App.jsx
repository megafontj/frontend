import {Link, Navigate, Route, Router, Routes} from "react-router-dom";
import LoginPage from "./pages/auth/login/LoginPage.jsx";
import SignUpPage from "./pages/auth/signup/SignUpPage.jsx";
import {ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthProvider, useAuth} from "./contexts/auth.context.jsx";
import Sidebar from "./components/common/Sidebar.jsx";

function App() {

    const { isAuthorized } = useAuth();

    return (<div className='flex max-w-6xl mx-auto text-white'>
            {isAuthorized && <Sidebar />}
            <Routes>
                <Route path='/'  element={isAuthorized ? <h1>Home</h1> : <Navigate to='/login' />}/>
                <Route path='/login' element={isAuthorized ?  <Navigate to='/' /> : <LoginPage />} />
                <Route path='/register' element={isAuthorized ?  <Navigate to='/' /> : <SignUpPage />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}
const WrappedApp = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);

export default WrappedApp;