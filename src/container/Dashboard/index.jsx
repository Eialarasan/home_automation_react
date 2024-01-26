import { useDispatch, useSelector } from "react-redux"
import action from "../../redux/action"
import { useEffect, useState } from "react"
import { getroomList } from "../../redux/reducer/RoomReducers"
import { toast } from "react-toastify"
import io from 'socket.io-client';
import { getScheduleList } from "../../redux/reducer/SchedulerReducers"
import NotificationModal from "./NotificationModel"
import { gethomeList } from "../../redux/reducer/homeReducers"
const socket = io('http://localhost:8081');


const Dashboard = () => {
    const roomlist = useSelector(getroomList)
    const homeList = useSelector(gethomeList)
    const [openNotificationModal, setNotificationModal] = useState(false)
    const [notfData, setNotfData] = useState('')
    const [homeId, sethomeId] = useState(homeList[0]?.id)
    const scheduleList = useSelector(getScheduleList)
    const dispatch = useDispatch()
    useEffect(() => {
        getroomDetails()
        getScheduleDetails()
        socketConnect()
    }, [homeId])

    const socketConnect = () => {
        socket.on('message', message => {
            setNotfData(JSON.parse(message))
            setNotificationModal(true)
            getroomDetails()
            getScheduleDetails()
        });
    }
    const getroomDetails = () => {
        const params = {
           homeId: homeId
        }
        dispatch(action.RoomList(params))
    }
    const getScheduleDetails = () => {
        const params = {
            homeId: homeId
        }
        dispatch(action.ScheduleList(params))
    }
    const statusChange = (o) => {
        const params = {
            id: o?.id,
            deviceStatus: o?.deviceStatus === 1 ? 0 : 1
        }
        const callback = (res) => {
            if (res?.response_code === 0) {
                getroomDetails()
                getScheduleDetails()
            } else {
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.UpdateDevice(params, callback))
    }
    return <div class="container-fluid">
        {/* <!-- Page Heading --> */}
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <select className="form-control" style={{'width':'30%'}} name="Devicename" id="Devicename"
                        type="text"
                        placeholder="Devicename" autoComplete="off"
                        onChange={(e) => {
                            sethomeId(e?.target?.value)
                        }} value={homeId} >
                            <option >Select</option>
                        {homeList.length>0&&homeList?.map((o) => {
                           return <option value={ o?.id}>{o?.homeName}</option>
                        })}

                    </select>
          
        </div>

        <div class="row">
            <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary"> <i class="bi bi-door-closed"></i> Room</h6>

                    </div>
                    <div class="card-body">
                        {roomlist?.length > 0 && roomlist?.map((o) => {
                            return <div class="col-xl-8 col-lg-7">
                                <div class="card shadow mb-4">
                                    {/* <!-- Card Header - Dropdown --> */}
                                    <div
                                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 class="m-0 font-weight-bold text-primary">{o?.roomName}</h6>

                                    </div>
                                    {/* <!-- Card Body --> */}
                                    <div class="card-body">
                                        <div class="scroll-container">
                                            <div class="scroll-content">
                                                {o?.Devices?.map((dev) => {
                                                    return <div class="col-6 m-1"><div className="card" style={{ backgroundColor: "#dee2e6" }}>
                                                        <div className="card-body">
                                                            <p>{dev?.deviceName}</p>
                                                            <label class="switch">
                                                                <input type="checkbox" checked={dev?.deviceStatus === 1 ? true : false} onChange={() => statusChange(dev)} />
                                                                <span class="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Content Row --> */}

        <div class="row">
            {/* <!-- Area Chart --> */}
            <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary"> <i class="bi bi-calendar-week"></i> Schedule</h6>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div class="card-body">
                        <div class="scroll-container">
                            <div class="scroll-content">
                                {scheduleList?.length > 0 && scheduleList?.map((dev) => {
                                    return <div class="col-6 m-1"><div className="card" style={{ backgroundColor: "#dee2e6" }}>
                                        <div className="card-body">
                                            <p>{dev?.Device?.deviceName}</p>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{dev?.Device?.deviceStatus === 1 ? `${dev?.startTime}-${dev?.endTime}` : "OFF"}</div>
                                        </div>
                                    </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                openNotificationModal && <NotificationModal notfData={notfData} openModal={openNotificationModal} onClose={() => setNotificationModal(false)} />
            }
            {/* <!-- Pie Chart --> */}

        </div>

        {/* <!-- Content Row --> */}


    </div>
}
export default Dashboard