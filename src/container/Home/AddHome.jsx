import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import action from "../../redux/action";

const Addhome = ({ openModal, onClose, homeDetails }) => {
    const [homeData, sethomeData] = useState({})
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const toggle = (val) => {
        onClose();
    }


    useEffect(() => {
       if(homeDetails?.id){
        const obj={
            homeName:homeDetails?.homeName,
             
        }
        sethomeData(obj)
    }
    }, [])

    const submit = () => {
        if (!homeData?.homeName) {
            setError({ homeName: 'Please enter home name' })
        } else {
            const callback = (res) => {
                if (res?.response_code === 0) {
                    sethomeData("")
                    setError("")
                    onClose()
                } else {
                    toast.error("Sorry Something went wrong")
                }
            }
            if (homeDetails?.id) {
                const params = {
                    "id": homeDetails?.id,
                    "homeName":homeData?.homeName,
                    
                }
                dispatch(action.UpdateHome(params, callback))
            } else {
                const params = {
                    "homeName":homeData?.homeName,
                    
                }
                dispatch(action.AddHome(params, callback))
            }
        }
    }

   
    return (
        <Modal show={openModal} centered={true}>
            <ModalHeader>
                <h5 >{homeDetails?.id?"Update home":"Add home"}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={() => toggle(false)} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </ModalHeader>
            <ModalBody>
                <div class="form-group">
                    <label for="inputText3" class="col-form-label">Home Name</label>
                    <input className="form-control form-control-lg" name="homename" id="homename"
                        type="text"
                        placeholder="homename" autoComplete="off"
                        onChange={(e) => {
                            sethomeData({...homeData, homeName: e?.target?.value})
                            setError({homeName:''})
                        }} value={homeData?.homeName} />

                    {error && <p style={{ color: 'red' }}>{error?.homeName}</p>}
                </div>
              

            </ModalBody>
            <ModalFooter>
                <button class="btn btn-primary btn-sm" onClick={() => submit()}>Submit</button>
            </ModalFooter>
        </Modal >
    )
}
export default Addhome