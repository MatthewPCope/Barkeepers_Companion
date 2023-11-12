import React from 'react'

const ViewRiffedCocktailList = () => {
    const [riffedCocktailList, setRiffedCocktailList] = useState ([]);
    const riffedCocktail = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/cocktails")
        .then((res) => {
            console.log(res.data);
            setRiffedCocktailList(res.data);
        })
        .catch((err) => console.log(err))
        
    }, [setRiffedCocktailList])

    const removeFromDom = cocktailById => {
        axios.delete(`http://localhost:8000/cocktails/delete/${cocktailById}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setRiffedCocktailList(riffedCocktailList.filter(riffedCocktail => riffedCocktail._id !== riffedCocktailById))
    })
        .catch((err) => console.log(err))
} 

  return (
    <div>ViewRiffedCocktailList</div>
  )
}

export default ViewRiffedCocktailList