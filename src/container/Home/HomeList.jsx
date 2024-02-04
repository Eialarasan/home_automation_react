import React, { useEffect, useState } from "react";
import Addhome from "./AddHome";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, gethomeList } from "../../redux/reducer/homeReducers";
import action from "../../redux/action";
import { toast } from "react-toastify";
import Loader from "../../component/Loader";
import { getUserData } from "../../redux/reducer/LoginReducers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = () => {
    const home = useSelector(getUserData)
    const [openAddhomeModal, setOpenAddhomeModal] = useState(false)
    const [openEdithomeModal, setOpenEdithomeModal] = useState(false)
    const [homeDetails, sethomeDetails] = useState({})
    const [search, setSearch] = useState("")
    const homeList = useSelector(gethomeList)
    const isLoading = useSelector(getLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        gethomeDetails()
    }, [search])


    const gethomeDetails = (id) => {
          const  params = {
                search,
                id: home?.homeDetails?.id
            }

        dispatch(action.HomeList(params))
    }
    const Updatehome = (data) => {
        sethomeDetails(data)
        setOpenEdithomeModal(true)
    }

    const deletehome = ({id}) => {
        const params = {
            id: id
        }
        const callback = (res) => {
            if (res?.response_code === 0) {
                gethomeDetails()
            } else {
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.DeleteHome(params, callback))
    }

    const statusChange = (o) => {
        const params = {
            id: o?.id,
            is_active:o?.isActive===1?0:1
        }
        const callback = (res) => {
            if (res?.response_code === 0) {
                gethomeDetails()
            } else {
                toast.error("Sorry something went wrong")
            }
        }
        dispatch(action.UpdateHome(params, callback))
    }
    return (
        <div className="container-fluid  dashboard-content">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Home</h1>
                <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={() => setOpenAddhomeModal(true)}>
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
                                    <th>Home name</th>
                                    <th>Status</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {homeList?.length > 0 && homeList?.map((o) => {
                                    return <tr>
                                        <td>{o?.homeName}</td>
                                        <td><label class="switch">
                                            <input type="checkbox" checked={o?.isActive === 1 ? true : false} onChange={()=>statusChange(o)}/>
                                            <span class="slider round"></span>
                                        </label></td>
                                        <td><button className="btn btn-primary" onClick={() => Updatehome(o)}>Edit</button></td>
                                        <td><button className="btn btn-primary" onClick={() => deletehome(o)}>Delete</button></td>
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
                openAddhomeModal && <Addhome
                    openModal={openAddhomeModal}
                    onClose={() => {
                        setOpenAddhomeModal(false)
                        gethomeDetails()
                    }} />
            }
            {
                openEdithomeModal && <Addhome
                    openModal={openEdithomeModal}
                    onClose={() => {
                        setOpenEdithomeModal(false)
                        gethomeDetails()
                    }}
                    homeDetails={homeDetails} />
            }
        </div>
    )
}
export default Home;