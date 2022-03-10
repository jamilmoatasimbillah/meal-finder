import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Meal from '../models/meal'
import SearchInput from '../atoms/SearchInput'
import IconButton from '../atoms/IconButton'
import FullRecipeView from '../organs/FullRecipe'

// API documentation available on https://www.themealdb.com/api.php




const urls = {    
    random: "https://www.themealdb.com/api/json/v1/1/random.php",
    searchByText: "https://www.themealdb.com/api/json/v1/1/search.php"
}

const searchMealByText = async (text) => {
    try{
        const url = `${urls.searchByText}?s=${text}`
        const {data} = await axios.get(url)
        return !data.meals ?  [] : data.meals.map(v => new Meal(v))
    }catch(err){
        return []
    }
}

const loadRandomMeal = async() => {
    const url = urls.random
    const {data} = await axios.get(url)

    const meal = new Meal(data.meals[0])
    return meal
}

const HomePage = () => {

    const [meal, setMeal] = useState(null)
    const [list, setList] = useState([])
    const [showList, setShowList]=useState(false)

    useEffect(loadRandomMeal, [])
    const handleLoadRandomMeal = async() => {
        const meal = await loadRandomMeal()
        setShowList(false)
        setMeal(meal)
    }

    const handleSearch = async(searchText, v) => {
        setShowList(false)
        setMeal(null)
        if(!searchText) return alert("Please enter a search term")
        const list = await searchMealByText(searchText)
        setShowList(true)
        setList([...list])
    }

    
    const renderRecipe = () => {
        if(showList){
            return !list.length ? "There are no search results. Try again!":
            <div className='search-result'>
                {list.map(meal => {
                    return <div key={meal.id} className="search-result__item" onClick={(e)=>{
                        e.preventDefault()
                        setMeal(meal)
                        setShowList(false)
                    }}>
                        <img src={meal.thumbnail}/>
                        <div>{meal.meal}</div>
                    </div>
                })}
            </div>
        }
        return meal && <FullRecipeView key={meal.id} meal={meal}/>
    }

    return <div className='home'>
        <div>
            <h3>Meal Finder</h3>
            <div style={{display:"flex", justifyContent: "center" }}>
                <SearchInput onSearch={handleSearch}/>
                <div style={{width: 10}}></div>
                <IconButton icon="fa-random" onClick={handleLoadRandomMeal}></IconButton>
            </div>
            {renderRecipe()}
        </div>
    </div>
}

export default HomePage