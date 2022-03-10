



class Meal {
    constructor(data){
        // console.log(data)
        this.id = data.idMeal
        this.area = data.strArea
        this.category = data.strCategory
        this.imageSource = data.strImageSource
        this.instructions = data.strInstructions
        this.meal = data.strMeal
        this.thumbnail = data.strMealThumb
        
        this.recipe = []

        for(let i= 1; i<=20; i++){
            const ingredient = {
                name: data[`strIngredient${i}`],
                measure: data[`strMeasure${i}`]
            }

            if(ingredient.name && ingredient.name.trim())this.recipe.push(ingredient)
        }
        
    }
}


export default Meal