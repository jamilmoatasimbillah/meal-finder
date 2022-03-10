import React from 'react'

const FullRecipeView = ({meal, ...props}) => {
    return <div className="full-recipe">
        <h1>{meal.meal}</h1>
        <img src={meal.thumbnail} 
            style={{
                borderRadius: 3,
                maxHeight: "40vh",
                border: "4px solid white",
                margin: "2vh",
            }} 
        />
        <div style={{border: "2px dashed orange", borderRadius: 3}}>
            <h4>{meal.category}</h4>
            <h4>{meal.area}</h4>
        </div>
        <div style={{margin: "20px 0"}}>{meal.instructions}</div>
        <h2>Ingredients</h2>
        {
            meal.recipe.map((ingredient, i) => {
                return <div key={i} style={{backgroundColor: "white", borderRadius: 3, padding: "2px", fontSize: 14, color: "#2d2013", margin: "3px", display: "inline-block"}}>
                    {ingredient.name}-{ingredient.measure}
                </div>
            })
        }
    </div>
}

export default FullRecipeView