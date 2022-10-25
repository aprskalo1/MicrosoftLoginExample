import React from "react";

export const ProfileData = (props) => {
    return(
        <div id="profile-div">
            <p><center><strong>First Name: </strong> {props.graphData.givenName}</center></p>
            <p><center><strong>Last Name: </strong> {props.graphData.surname}</center></p>
            <p><center><strong>Email: </strong> {props.graphData.userPrincipalName}</center></p>
            <p><center><strong>Id: </strong> {props.graphData.id}</center></p>
        </div>
    );
};