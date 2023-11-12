import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteButton = (props) => {
    const { cocktailById, successCallback } = props;
    const navigate = useNavigate();

    const deleteCocktail = () => {
        console.log('Deleting cocktail...');
        axios.delete(`http://localhost:8000/cocktails/${cocktailById}`)
            .then(res => {
                console.log("Cocktail Deleted Successfully...")
                    // Check if the response indicates success (adjust this condition based on your API response structure)
                    if (res.status === 200) {
                        successCallback();
                        navigate('/cocktails'); // Redirect to the cocktails list page
                    } else {
                        console.error('Unexpected response status:', res.status);
                    }
                })
                .catch(err => console.error(err));
    };

    return (
        <button onClick={deleteCocktail}>
            Delete
        </button>
    );
};

export default DeleteButton;
