import React from 'react'
import { useMatch } from 'react-router-dom'

export default function Detail() {

    const match = useMatch("/detail/:id");

    return (  
        <div>
            Value of id parameter: {match.params.id}
            <br/>
            Current Pathname: {match.pathname}
        </div>
    )
}
