import {Link, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/auth/login/LoginPage.jsx";
import SignUpPage from "./pages/auth/signup/SignUpPage.jsx";

export default function App() {
    return (<div className='flex max-w-6xl mx-auto'>
            <ul>
                <li className='text-white'><Link to={'/login'}>Login</Link></li>
                <li className='text-white'><Link to={'/register'}>Register</Link></li>
            </ul>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<SignUpPage />} />
            </Routes>
        </div>
    );
}
