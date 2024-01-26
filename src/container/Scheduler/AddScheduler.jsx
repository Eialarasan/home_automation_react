import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import action from "../../redux/action";
import { gethomeList } from "../../redux/reducer/homeReducers";
import { getroomList } from "../../redux/reducer/RoomReducers";
import moment from "moment/moment";
import { getdeviceList } from "../../redux/reducer/DeviceReducers";

const AddScheduler = ({ openModal, onClose, SchedulerDetails }) => {
    const homeList = useSelector(gethomeList)
    const roomList = useSelector(getroomList)
    const deviceList=useSelector(getdeviceList)
    const [SchedulerData, setSchedulerData] = useState({})
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const toggle = (val) => {
        onClose();
    }

    useEffect(() => {
        if (SchedulerDetails?.id) {
            const obj = {
                
                "homeId":SchedulerDetails?.homeId,
                    "roomId":SchedulerDetails?.roomId,
                    "startTime":SchedulerDetails?.startTime,
                    "endTime":SchedulerDetails?.endTime,
                    "deviceId":SchedulerDetails?.deviceId,
                    "deviceStatus":SchedulerDetails?.deviceStatus
            }
            setSchedulerData(obj)
        }
        dispatch(action.HomeList())
        dispatch(action.RoomList())
    }, [])

    const submit = () => {
       if(!SchedulerData?.homeId){
            setError({homeId:"Please select home"})
        }else if(!SchedulerData?.roomId){
            setError({roomId:"Please select room"})
        }else if(!SchedulerData?.deviceId){
            setError({deviceId:"Please select device"})
        }else if(!SchedulerData?.startTime){
            setError({deviceId:"Please select start time"})
        }else if(!SchedulerData?.endTime){
            setError({deviceId:"Please select end time"})
        }  else {
            const callback = (res) => {
                if (res?.response_code === 0) {
                    setSchedulerData("")
                    setError("")
                    onClose()
                } else {
                    toast.error("Sorry Something went wrong")
                }
            }
            if (SchedulerDetails?.id) {
                
                const params = {
                    "id": SchedulerDetails?.id,
                    "homeId":SchedulerData?.homeId,
                    "roomId":SchedulerData?.roomId,
                    "startTime":SchedulerData?.startTime,
                    "endTime":SchedulerData?.endTime,
                    "deviceId":SchedulerData?.deviceId,
                    
                    
                }
                dispatch(action.UpdateSchedule(params, callback))
            } else {
                const params = {
                    "homeId":SchedulerData?.homeId,
                    "roomId":SchedulerData?.roomId,
                    "startTime":SchedulerData?.startTime,
                    "endTime":SchedulerData?.endTime,
                    "deviceId":SchedulerData?.deviceId,
                                    }
                dispatch(action.AddSchedule(params, callback))
            }
        }
    }


    return (
        <Modal show={openModal} centered={true}>
            <ModalHeader>
                <h5 >{SchedulerDetails?.id ? "Update Scheduler" : "Add Scheduler"}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={() => toggle(false)} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </ModalHeader>
            <ModalBody>
              
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Home Name</label>
                    <select className="form-control form-control-lg" name="Schedulername" id="Schedulername"
                        type="text"
                        placeholder="Schedulername" autoComplete="off"
                        onChange={(e) => {
                            setSchedulerData({ ...SchedulerData, homeId: e?.target?.value })
                            setError({ homeId: '' })
                        }} value={SchedulerData?.homeId} >
                            <option >Select</option>
                        {homeList?.length>0&&homeList?.map((o) => {
                           return <option value={ o?.id}>{o?.homeName}</option>
                        })}

                    </select>

                    {error?.homeId && <p style={{ color: 'red' }}>{error?.homeId}</p>}
                </div>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Room Name</label>
                    <select className="form-control form-control-lg" name="Schedulername" id="Schedulername"
                        type="text"
                        placeholder="Schedulername" autoComplete="off"
                        onChange={(e) => {
                            setSchedulerData({ ...SchedulerData, roomId: e?.target?.value })
                            setError({ roomId: '' })
                        }} value={SchedulerData?.roomId} >
                            <option >Select</option>
                        {roomList.length>0&&roomList?.map((o) => {
                           return <option value={ o?.id}>{o?.roomName}</option>
                        })}

                    </select>

                    {error?.roomId && <p style={{ color: 'red' }}>{error?.roomId}</p>}
                </div>

                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Device Name</label>
                    <select className="form-control form-control-lg" name="Schedulername" id="Schedulername"
                        type="text"
                        placeholder="" autoComplete="off"
                        onChange={(e) => {
                            setSchedulerData({ ...SchedulerData, deviceId: e?.target?.value })
                            setError({ deviceId: '' })
                        }} value={SchedulerData?.deviceId} >
                            <option >Select</option>
                        {deviceList?.length>0&&deviceList?.map((o) => {
                           return <option value={ o?.id}>{o?.deviceName}</option>
                        })}

                    </select>

                    {error?.deviceId && <p style={{ color: 'red' }}>{error?.deviceId}</p>}
                </div>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Start time</label>
                    <input className="form-control form-control-lg" name="Schedulername" id="Schedulername"
                        type="time"
                        placeholder="start time" autoComplete="off"
                        onChange={(e) => {
                            setSchedulerData({ ...SchedulerData, startTime: e?.target?.value })
                            setError({ startTime: '' })
                        }} value={SchedulerData?.startTime} />

                    {error?.startTime && <p style={{ color: 'red' }}>{error?.startTime}</p>}
                </div>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">End time</label>
                    <input className="form-control form-control-lg" name="Schedulername" id="Schedulername"
                        type="time"
                        placeholder="start time" autoComplete="off"
                        onChange={(e) => {
                            setSchedulerData({ ...SchedulerData, endTime: e?.target?.value })
                            setError({ endTime: '' })
                        }} value={SchedulerData?.endTime} />

                    {error?.endTime && <p style={{ color: 'red' }}>{error?.endTime}</p>}
                </div>
               
            </ModalBody>
            <ModalFooter>
                <button class="btn btn-primary btn-sm" onClick={() => submit()}>Submit</button>
            </ModalFooter>
        </Modal >
    )
}
export default AddScheduler