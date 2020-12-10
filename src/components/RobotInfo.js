import React, {useContext} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { Context } from "../Context";

function RobotInfo(){

    let {id} = useParams();
    const {robotInfo, setRobotInfo} = useContext(Context);
    let history = useHistory();

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="robot-info">
            <p onClick={goBack} className="back-button">Back to all robots ></p>
            <h1>{robotInfo.name}</h1>
            <div className="robot-info-details">
                <p><b>Username:</b> {robotInfo.username}</p>
                <p><b>Email:</b> {robotInfo.email}</p>
                <p><b>Phone:</b> {robotInfo.phone}</p>
                <p><b>Website:</b> {robotInfo.website}</p>
                <p><b>Address:</b> {robotInfo.address.street},{robotInfo.address.city}, {robotInfo.addresszipcode}</p>
                <p><b>Company:</b> {robotInfo.company.bs}</p>
            </div>
            <img alt='robots' src={`https://robohash.org/${id}?size=400x400`} />
        </div>
    )
}

export default RobotInfo