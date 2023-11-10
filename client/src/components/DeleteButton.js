import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
    const { cocktailById, successCallback } = props;
    const deleteCocktail = e => {
        axios.delete(`http://localhost:8000/liaizons/${cocktailById}`)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteCocktail}>
            Delete
        </button>
    )
}
export default DeleteButton;

