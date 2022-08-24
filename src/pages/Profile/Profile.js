import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Profile() {

    if (localStorage.getItem('userLogin')) {
        return (
            <div>Profile</div>
        )
    }
    else {
        alert('Please Login to see your Profile page!');
        return <Navigate to="/login" replace="false"/>
    }
}

