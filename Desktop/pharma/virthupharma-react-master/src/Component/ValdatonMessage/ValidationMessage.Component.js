import React from 'react';

const ValidationMessage = ({message}) =>{
    return(
        <span class="invalid-feedback" role="alert" style={{display:"block"}}>
        <strong>
            {message}
        </strong>
      </span>
    )
}

export default  ValidationMessage
