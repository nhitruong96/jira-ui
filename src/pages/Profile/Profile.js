import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Profile(props) {

    if (localStorage.getItem('userLogin')) {
        return (
            <div>Profile</div>
        )
    } else {
        alert('Please Login to see your Profile page!');
        return <Redirect to="/login" />
    }
}

