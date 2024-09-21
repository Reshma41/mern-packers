import React, { useState } from 'react'
import MoversNav from './MoversNav'
import { useNavigate, useParams } from 'react-router-dom'
import Lottie from "lottie-react";
import img from "./Assets/rating.json";
import { toast } from 'react-toastify';
import axiosInstance from '../BaseUrl';

function MoverAddLocation() {

    const id=useParams();

    const [location, setcomplaint] = useState({loc:'',status:''});
  const navigate = useNavigate();

  const doSubmit = (e) => {
    e.preventDefault();
   
    axiosInstance
      .post(`/updateLoc/${id.id}`, location)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          toast.success("Location Added");
          navigate('/movers-view-orders')
        } 
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login failed");
      });
      
  };

  return (
    <div>
      <MoversNav/>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5">
            <h6 className="text-primary text-uppercase">Add </h6>
            <h1 className="display-5 text-uppercase mb-0">Complaints</h1>
          </div>
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <Lottie animationData={img} />
              </div>
            </div>
            <div className="col-lg-7" style={{ paddingTop: "2rem" }}>
              <form onSubmit={doSubmit} >
                <div className="row g-3">

                <div className="col-12" style={{ marginBottom: "1rem" }}>
                    <textarea
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Add Status"
                      style={{ height: "75px" }}
                      onChange={(e)=>{setcomplaint({...location,status:e.target.value})}}

                    />
                  </div>
                 
                  <div className="col-12" style={{ marginBottom: "1rem" }}>
                    <textarea
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Add Location"
                      style={{ height: "75px" }}
                      onChange={(e)=>{setcomplaint({...location,loc:e.target.value})}}

                    />
                  </div>
                  
                  

                  <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">add</button>
                            </div>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoverAddLocation
