import React , {useEffect, useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import CocktailList from '../components/CocktailList';
import {userContext} from '../context/UserContext'

const Main = () => {
    const [cocktailList, setCocktailList] = useState ([]);
    const {currentUser} = useContext(userContext)
    const cocktail = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:8000/cocktails")
        .then((res) => {
            console.log(res.data);
            setCocktailList(res.data);
        })
        .catch((err) => console.log(err))
        
    }, [setCocktailList])

    const removeFromDom = cocktailById => {
        axios.delete(`http://localhost:8000/cocktails/delete/${cocktailById}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setCocktailList(cocktailList.filter(cocktail => cocktail._id !== cocktailById))
    })
        .catch((err) => console.log(err))
}  
const logoutUser = () => {
    axios.post('http://localhost:8000/api/logoutUser', {}, {withCredentials:true})
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
}


    return (
        <div>
            <div >
                <h1 className=' font2 mt-5 text-center'>
                    BARKEEPER'S COMPANION
                </h1>
                <h2 className='font1 text-center mt-3'>Welcome, {currentUser.firstName}</h2>

                <div className='text-center mt-3'>
                    <Link to={'/cocktails/create'}>
                        <button className='font1 button' >Create a Cocktail</button>
                    </Link>
                </div>

                <div className='text-center mt-3'>
                    <Link to={'/cocktails/riffed'}>
                        <button className='font1 button' >Riffed Cocktail List</button>
                    </Link>
                </div>
                <div className='text-center'>
                    <button className="font1 button" onClick={logoutUser}>Logout</button>
                </div>
                
                <br/>
                <br/>
                <CocktailList cocktailList={cocktailList} removeFromDom={removeFromDom} initialName={cocktail.name} />
            </div> 
        </div>
    )
}

export default Main;