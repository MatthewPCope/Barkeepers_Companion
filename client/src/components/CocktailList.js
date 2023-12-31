import React, {useEffect , useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import DeleteButton from './DeleteButton';
import {useNavigate} from 'react-router-dom';


const CocktailList = (props) => {

    const [cocktail, setCocktail] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/cocktails")
        .then((res) => {
            console.log(res.data);
            setCocktail(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [setCocktail])
// console.log(cocktail)
const logoutUser = () => {
    axios.post('http://localhost:8000/api/logoutUser', {}, {withCredentials:true})
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
}
const deleteCocktail = (idFromBelow) => {
    axios.delete(`http://localhost:8000/cocktails/${idFromBelow}`)
        .then((res) => {
            const newList = cocktail.filter((currentCocktail, index) => currentCocktail._id != idFromBelow)
            setCocktail(newList);
            
        })
        .catch((err) => {
            console.log(err);
        })
}
    
return (
    <>
        <h1 className='font1 text-center mb-3 '>Cocktails</h1>
            
            <div id="container2" className='font1'>
                <table className=" table2 w-75 border-dark border-4 text-center table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col" colSpan="2">Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    cocktail.map((currentCocktail, index)=>{
                        // if(currentCocktail.userId == currentUser._id)
                        return(
                            <tr key={currentCocktail._id}>
                                <td>
                                    <Link to={`/cocktails/${currentCocktail._id}`}>
                                        <button  className=" button">{currentCocktail.name} </button>
                                    </Link>
                                </td>
                                
                                <td>
                                    <Link to={`/cocktails/update/${currentCocktail._id}`}>
                                        <button className=" button">Edit </button>
                                    </Link>
                                </td>
                                <td>
                                <button className='button' onClick={() => deleteCocktail(currentCocktail._id)}>Delete</button>
                                </td>
                            </tr>
                    )})}
                    </tbody>
                </table>
            </div>
                <div className='text-center'>
                    <button className="font1 button" onClick={logoutUser}>Logout</button>
                </div>
    </>
)
}

export default CocktailList;