import { Route, Routes } from 'react-router';
import './App.css';
import Login from './container/Login';
import Register from './container/Register';
import Layout from './component/Layout';
import '../src/assets/css/sb-admin-2.css'
import '../src/assets/css/sb-admin-2.min.css'
import Home from './container/Home/HomeList';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Room from './container/Room/RoomList';
import Device from './container/Device/DeviceList';
import Scheduler from './container/Scheduler/SchedulerList';
import Dashboard from './container/Dashboard';

function App() {


    return (
        <div>

            <Routes>
                <Route path='/' element={<Login />}>
                </Route>
                <Route path='/register' element={<Register />}>
                </Route>
                <Route path='/' element={<Layout />}>
                <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/room' element={<Room />} />
                    <Route path='/device' element={<Device />} />
                    <Route path='/scheduler' element={<Scheduler />} />
                </Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
