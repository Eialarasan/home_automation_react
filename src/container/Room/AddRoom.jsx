import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import action from "../../redux/action";
import { getroomList } from "../../redux/reducer/RoomReducers";
import { gethomeList } from "../../redux/reducer/homeReducers";

const AddRoom = ({ openModal, onClose, roomDetails }) => {
    const homeList = useSelector(gethomeList)
    const [roomData, setroomData] = useState({})
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const toggle = (val) => {
        onClose();
    }

    useEffect(() => {
        if (roomDetails?.id) {
            const obj = {
                roomName: roomDetails?.roomName,
                homeId:roomDetails?.homeId
            }
            setroomData(obj)
        }
        dispatch(action.HomeList())
    }, [])

    const submit = () => {
        if (!roomData?.roomName) {
            setError({ roomName: 'Please enter room name' })
        }else if(!roomData?.homeId){
            setError({homId:"Please select home"})
        } else {
            const callback = (res) => {
                if (res?.response_code === 0) {
                    setroomData("")
                    setError("")
                    onClose()
                } else {
                    toast.error("Sorry Something went wrong")
                }
            }
            if (roomDetails?.id) {
                const params = {
                    "id": roomDetails?.id,
                    "roomName": roomData?.roomName,
                    "homeId":roomData?.homeId

                }
                dispatch(action.UpdateRoom(params, callback))
            } else {
                const params = {
                    "roomName": roomData?.roomName,
                    "homeId":roomData?.homeId
                }
                dispatch(action.AddRoom(params, callback))
            }
        }
    }


    return (
        <Modal show={openModal} centered={true}>
            <ModalHeader>
                <h5 >{roomDetails?.id ? "Update room" : "Add room"}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={() => toggle(false)} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </ModalHeader>
            <ModalBody>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Room Name</label>
                    <input className="form-control form-control-lg" name="roomname" id="roomname"
                        type="text"
                        placeholder="roomname" autoComplete="off"
                        onChange={(e) => {
                            setroomData({ ...roomData, roomName: e?.target?.value })
                            setError({ roomName: '' })
                        }} value={roomData?.roomName} />

                    {error && <p style={{ color: 'red' }}>{error?.roomName}</p>}
                </div>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Home Name</label>
                    <select className="form-control form-control-lg" name="roomname" id="roomname"
                        type="text"
                        placeholder="roomname" autoComplete="off"
                        onChange={(e) => {
                            setroomData({ ...roomData, homeId: e?.target?.value })
                            setError({ homeId: '' })
                        }} value={roomData?.homeId} >
                            <option >Select</option>
                        {homeList?.map((o) => {
                           return <option value={ o?.id}>{o?.homeName}</option>
                        })}

                    </select>

                    {error && <p style={{ color: 'red' }}>{error?.roomName}</p>}
                </div>


            </ModalBody>
            <ModalFooter>
                <button class="btn btn-primary btn-sm" onClick={() => submit()}>Submit</button>
            </ModalFooter>
        </Modal >
    )
}
export default AddRoom