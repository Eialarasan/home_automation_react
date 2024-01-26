import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import action from "../../redux/action";
import { gethomeList } from "../../redux/reducer/homeReducers";
import { getroomList } from "../../redux/reducer/RoomReducers";

const AddDevice = ({ openModal, onClose, DeviceDetails }) => {
    const homeList = useSelector(gethomeList)
    const roomList = useSelector(getroomList)
    const [DeviceData, setDeviceData] = useState({})
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const toggle = (val) => {
        onClose();
    }

    useEffect(() => {
        if (DeviceDetails?.id) {
            const obj = {
                DeviceName: DeviceDetails?.deviceName,
                homeId:DeviceDetails?.homeId,
                roomId:DeviceDetails?.roomId,
                deviceStatus:DeviceDetails?.deviceStatus
            }
            setDeviceData(obj)
        }
        dispatch(action.HomeList())
        dispatch(action.RoomList())
    }, [])

    const submit = () => {
        if (!DeviceData?.DeviceName) {
            setError({ DeviceName: 'Please enter Device name' })
        }else if(!DeviceData?.homeId){
            setError({homeId:"Please select home"})
        }else if(!DeviceData?.roomId){
            setError({roomId:"Please select room"})
        } else {
            const callback = (res) => {
                if (res?.response_code === 0) {
                    setDeviceData("")
                    setError("")
                    onClose()
                } else {
                    toast.error("Sorry Something went wrong")
                }
            }
            if (DeviceDetails?.id) {
                const params = {
                    "id": DeviceDetails?.id,
                    "deviceName": DeviceData?.DeviceName,
                    "homeId":DeviceData?.homeId,
                    "roomId":DeviceData?.roomId,
                    "deviceStatus":DeviceData?.deviceStatus
                }
                dispatch(action.UpdateDevice(params, callback))
            } else {
                const params = {
                    "deviceName": DeviceData?.DeviceName,
                    "homeId":DeviceData?.homeId,
                    "roomId":DeviceData?.roomId,
                    "deviceStatus":DeviceData?.deviceStatus
                }
                dispatch(action.AddDevices(params, callback))
            }
        }
    }


    return (
        <Modal show={openModal} centered={true}>
            <ModalHeader>
                <h5 >{DeviceDetails?.id ? "Update Device" : "Add Device"}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={() => toggle(false)} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </ModalHeader>
            <ModalBody>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Device Name</label>
                    <input className="form-control form-control-lg" name="Devicename" id="Devicename"
                        type="text"
                        placeholder="Devicename" autoComplete="off"
                        onChange={(e) => {
                            setDeviceData({ ...DeviceData, DeviceName: e?.target?.value })
                            setError({ DeviceName: '' })
                        }} value={DeviceData?.DeviceName} />

                    {error?.DeviceName && <p style={{ color: 'red' }}>{error?.DeviceName}</p>}
                </div>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Home Name</label>
                    <select className="form-control form-control-lg" name="Devicename" id="Devicename"
                        type="text"
                        placeholder="Devicename" autoComplete="off"
                        onChange={(e) => {
                            setDeviceData({ ...DeviceData, homeId: e?.target?.value })
                            setError({ homeId: '' })
                        }} value={DeviceData?.homeId} >
                            <option >Select</option>
                        {homeList.length>0&&homeList?.map((o) => {
                           return <option value={ o?.id}>{o?.homeName}</option>
                        })}

                    </select>

                    {error?.homeId && <p style={{ color: 'red' }}>{error?.homeId}</p>}
                </div>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Room Name</label>
                    <select className="form-control form-control-lg" name="Devicename" id="Devicename"
                        type="text"
                        placeholder="Devicename" autoComplete="off"
                        onChange={(e) => {
                            setDeviceData({ ...DeviceData, roomId: e?.target?.value })
                            setError({ roomId: '' })
                        }} value={DeviceData?.roomId} >
                            <option >Select</option>
                        {roomList?.length>0&&roomList?.map((o) => {
                           return <option value={ o?.id}>{o?.roomName}</option>
                        })}

                    </select>

                    {error?.roomId && <p style={{ color: 'red' }}>{error?.roomId}</p>}
                </div>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Device Status</label>
                    <select className="form-control form-control-lg" name="Schedulername" id="Schedulername"
                        type="text"
                        placeholder="" autoComplete="off"
                        onChange={(e) => {
                            setDeviceData({ ...DeviceData, deviceStatus: e?.target?.value })
                            setError({ deviceStatus: '' })
                        }} value={DeviceData?.deviceStatus} >
                            <option >Select</option>
                            <option value={1}>On</option>
                            <option value={0}>Off</option>
                    </select>
                    {error?.deviceStatus && <p style={{ color: 'red' }}>{error?.deviceStatus}</p>}
                </div>

            </ModalBody>
            <ModalFooter>
                <button class="btn btn-primary btn-sm" onClick={() => submit()}>Submit</button>
            </ModalFooter>
        </Modal >
    )
}
export default AddDevice