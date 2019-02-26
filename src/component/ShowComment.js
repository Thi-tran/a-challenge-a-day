import React, { useState, useEffect } from 'react';

const ShowComment = (props) => (
    <div>
        <p><strong>{props.name}</strong>: {props.comment}</p>
    </div>
)

export default ShowComment;