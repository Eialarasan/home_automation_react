import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import action from "../../redux/action";
import { toast } from "react-toastify";
import Loader from "../../component/Loader";

import { getLoading, getScheduleList } from "../../redux/reducer/SchedulerReducers";
import AddScheduler from "./AddScheduler";

const Scheduler = () => {
    const [openAddSchedulerModal, setOpenAddSchedulerModal] = useState(false)
    const [openEditSchedulerModal, setOpenEditSchedulerModal] = useState(false)
    const [SchedulerDetails, setSchedulerDetails] = useState({})
    const [search, setSearch] = useState("")
    const SchedulerList = useSelector(getScheduleList)
    const isLoading = useSelector(getLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        getSchedulerDetails()
    }, [search])


    const getSchedulerDetails = (id) => {
        dispatch(action.ScheduleList())
    }
    const UpdateScheduler = (data) => {
        setSchedulerDetails(data)
        setOpenEditSchedulerModal(true)
    }

    const deleteScheduler = ({id}) => {
        const params = {
            id: id
        }
        const callback = (res) => {
            if (res?.response_code === 0) {
                getSchedulerDetails()
            } else {
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.DeleteSchedule(params, callback))
    }

    const statusChange = (o) => {
        const params = {
            id: o?.id,
            is_active:o?.isActive===1?0:1
        }
        const callback = (res) => {
            if (res?.response_code === 0) {
                getSchedulerDetails()
            } else {
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.UpdateSchedule(params, callback))
    }
    
    return (
        <div className="container-fluid  dashboard-content">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Scheduler</h1>
                <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={() => setOpenAddSchedulerModal(true)}>
                    + Add</button>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    {/* <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6> */}
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Home</th>
                                    <th>Room</th>
                                    <th>Device</th>
                                    <th>Start time</th>
                                    <th>End time</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {SchedulerList.length > 0 && SchedulerList?.map((o) => {
                                    return <tr>
                                        <td>{o?.Home?.homeName}</td>
                                        <td>{o?.Room?.roomName}</td>
                                        <td>{o?.Device?.deviceName}</td>
                                        <td>{o?.startTime}</td>
                                        <td>{o?.endTime}</td>
                                        <td><label class="switch">
                                            <input type="checkbox" checked={o?.isActive === 1 ? true : false} onChange={()=>statusChange(o)}/>
                                            <span class="slider round"></span>
                                        </label></td>
                                        <td><button className="btn btn-primary" onClick={() => UpdateScheduler(o)}>Edit</button></td>
                                        <td><button className="btn btn-primary" onClick={() => deleteScheduler(o)}>Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                isLoading && <Loader />
            }
            {
                openAddSchedulerModal && <AddScheduler
                    openModal={openAddSchedulerModal}
                    onClose={() => {
                        setOpenAddSchedulerModal(false)
                        getSchedulerDetails()
                    }} />
            }
            {
                openEditSchedulerModal && <AddScheduler
                    openModal={openEditSchedulerModal}
                    onClose={() => {
                        setOpenEditSchedulerModal(false)
                        getSchedulerDetails()
                    }}
                    SchedulerDetails={SchedulerDetails} />
            }
        </div>
    )
}
export default Scheduler;