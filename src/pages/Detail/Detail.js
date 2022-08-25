import React from 'react'

export default function Detail(props) {

    return (  
        <div>
            Value of id parameter: {props.match.params.id}
            <br/>
            Current Pathname: {props.match.pathname}
        </div>
    )
}
