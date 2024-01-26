import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import action from "../../redux/action";
import { toast } from "react-toastify";
import Loader from "../../component/Loader";

import { getLoading, getdeviceList } from "../../redux/reducer/DeviceReducers";
import AddDevice from "./AddDevice";

const Device = () => {
    const [openAddDeviceModal, setOpenAddDeviceModal] = useState(false)
    const [openEditDeviceModal, setOpenEditDeviceModal] = useState(false)
    const [DeviceDetails, setDeviceDetails] = useState({})
    const [search, setSearch] = useState("")
    const deviceList = useSelector(getdeviceList)
    const isLoading = useSelector(getLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        getDeviceDetails()
    }, [search])


    const getDeviceDetails = (id) => {
        dispatch(action.Device())
    }
    const UpdateDevice = (data) => {
        setDeviceDetails(data)
        setOpenEditDeviceModal(true)
    }

    const deleteDevice = ({id}) => {
        const params = {
            id: id
        }
        const callback = (res) => {
            if (res?.response_code === 0) {
                getDeviceDetails()
            } else {
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.DeleteDevice(params, callback))
    }

    const statusChange = (o) => {
        const params = {
            id: o?.id,
            is_active:o?.isActive===1?0:1,
        }
        const callback = (res) => {
            if (res?.response_code === 0) {
                getDeviceDetails()
            } else {
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.UpdateDevice(params, callback))
    }

    const deviceStatusChange = (o) => {
        const params = {
            id: o?.id,
            deviceStatus:o?.deviceStatus===1?0:1
        }
        const callback = (res) => {
            if (res?.response_code === 0) {
                getDeviceDetails()
            } else {
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.UpdateDevice(params, callback))
    }
    return (
        <div className="container-fluid  dashboard-content">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Device</h1>
                <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={() => setOpenAddDeviceModal(true)}>
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
                                    <th>Device </th>
                                    <th>Home</th>
                                    <th>Room</th>
                                    <th>Device Status</th>
                                    <th>Status</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {deviceList.length > 0 && deviceList?.map((o) => {
                                    return <tr>
                                        <td>{o?.deviceName}</td>
                                        <td>{o?.Home?.homeName}</td>
                                        <td>{o?.Room?.roomName}</td>
                                        <td><label class="switch">
                                            <input type="checkbox" checked={o?.deviceStatus === 1 ? true : false} onChange={()=>deviceStatusChange(o)}/>
                                            <span class="slider round"></span>
                                        </label></td>
                                        <td><label class="switch">
                                            <input type="checkbox" checked={o?.isActive === 1 ? true : false} onChange={()=>statusChange(o)}/>
                                            <span class="slider round"></span>
                                        </label></td>
                                        <td><button className="btn btn-primary" onClick={() => UpdateDevice(o)}>Edit</button></td>
                                        <td><button className="btn btn-primary" onClick={() => deleteDevice(o)}>Delete</button></td>
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
                openAddDeviceModal && <AddDevice
                    openModal={openAddDeviceModal}
                    onClose={() => {
                        setOpenAddDeviceModal(false)
                        getDeviceDetails()
                    }} />
            }
            {
                openEditDeviceModal && <AddDevice
                    openModal={openEditDeviceModal}
                    onClose={() => {
                        setOpenEditDeviceModal(false)
                        getDeviceDetails()
                    }}
                    DeviceDetails={DeviceDetails} />
            }
        </div>
    )
}
export default Device;