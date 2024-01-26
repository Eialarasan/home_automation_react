import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import action from "../../redux/action";
import { toast } from "react-toastify";
import Loader from "../../component/Loader";

import { getLoading, getroomList } from "../../redux/reducer/RoomReducers";
import AddRoom from "./AddRoom";

const Room = () => {
    const [openAddroomModal, setOpenAddRoomModal] = useState(false)
    const [openEditroomModal, setOpenEditroomModal] = useState(false)
    const [roomDetails, setroomDetails] = useState({})
    const [search, setSearch] = useState("")
    const roomList = useSelector(getroomList)
    const isLoading = useSelector(getLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        getroomDetails()
    }, [search])


    const getroomDetails = (id) => {

        dispatch(action.RoomList())
    }
    const Updateroom = (data) => {
        setroomDetails(data)
        setOpenEditroomModal(true)
    }

    const deleteroom = ({id}) => {
        const params = {
            id: id
        }
        const callback = (res) => {
            if (res?.response_code === 0) {
                getroomDetails()
            } else {
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.Deleteroom(params, callback))
    }

    const statusChange = (o) => {
        const params = {
            id: o?.id,
            is_active:o?.isActive===1?0:1
        }
        const callback = (res) => {
            if (res?.response_code === 0) {
                getroomDetails()
            } else {
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.UpdateRoom(params, callback))
    }
    return (
        <div className="container-fluid  dashboard-content">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Room</h1>
                <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={() => setOpenAddRoomModal(true)}>
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
                                    <th>Room</th>
                                    <th>Home</th>
                                    <th>Status</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roomList.length > 0 && roomList?.map((o) => {
                                    return <tr>
                                        <td>{o?.roomName}</td>
                                        <td>{o?.Home?.homeName}</td>
                                        <td><label class="switch">
                                            <input type="checkbox" checked={o?.isActive === 1 ? true : false} onChange={()=>statusChange(o)}/>
                                            <span class="slider round"></span>
                                        </label></td>
                                        <td><button className="btn btn-primary" onClick={() => Updateroom(o)}>Edit</button></td>
                                        <td><button className="btn btn-primary" onClick={() => deleteroom(o)}>Delete</button></td>
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
                openAddroomModal && <AddRoom
                    openModal={openAddroomModal}
                    onClose={() => {
                        setOpenAddRoomModal(false)
                        getroomDetails()
                    }} />
            }
            {
                openEditroomModal && <AddRoom
                    openModal={openEditroomModal}
                    onClose={() => {
                        setOpenEditroomModal(false)
                        getroomDetails()
                    }}
                    roomDetails={roomDetails} />
            }
        </div>
    )
}
export default Room;