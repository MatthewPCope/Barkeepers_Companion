import React, {useEffect , useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import DeleteButton from './DeleteButton';
import {useNavigate} from 'react-router-dom';


const DisplayRiffedCocktails = (props) => {

    const [riffedCocktail, setRiffedCocktail] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/cocktails/riffed")
        .then((res) => {
            console.log(res.data);
            setRiffedCocktail(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [setRiffedCocktail])
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
            const newList = riffedCocktail.filter((currentCocktail, index) => currentCocktail._id != idFromBelow)
            setRiffedCocktail(newList);
            
        })
        .catch((err) => {
            console.log(err);
        })
}
    
return (
    <>
        <h1 className='font1 text-center mb-3 '>Riffed Cocktails</h1>
            
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
                    riffedCocktail.map((riffCocktail, index)=>{
                        // if(currentCocktail.userId == currentUser._id)
                        return(
                            <tr key={riffCocktail._id}>
                                <td>
                                    <Link to={`/cocktails/${riffCocktail._id}`}>
                                        <button  className=" font1 button">{riffCocktail.name} </button>
                                    </Link>
                                </td>
                                
                                <td>
                                    <Link to={`/cocktails/update/${riffCocktail._id}`}>
                                        <button className="font1  button">Edit </button>
                                    </Link>
                                </td>
                                <td>
                                <button className=' font1 button' onClick={() => deleteCocktail(riffCocktail._id)}>Delete</button>
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

export default DisplayRiffedCocktails;