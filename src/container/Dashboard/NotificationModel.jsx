import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import action from "../../redux/action";

const NotificationModal = ({ openModal, onClose, notfData }) => {
    const{data,message}=notfData
    const toggle = (val) => {
        onClose();
    }
    
    useEffect(()=>{
        setTimeout(() => {
            onClose()
        }, 10000);
    },[])
    return (
        <Modal show={openModal} centered={true}>
            <ModalHeader>
                <h5>Notification..</h5>
            </ModalHeader>
            <ModalBody>
            <p>{`${data?.deviceName} is ${message==="OFF"?'offed':'Onned'} in ${data?.Room?.roomName}`}</p>
              

            </ModalBody>
            <ModalFooter>
                <button class="btn btn-primary btn-sm" onClick={() => onClose()}>Close</button>
            </ModalFooter>
        </Modal >
    )
}
export default NotificationModal