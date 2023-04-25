import React from "react";

class CreateRecipe extends React.Component {
  render() {
    return (
      <div className="CreateRecipe">
        <div className="createRecipePhoto">Upload Recipe Photo</div>

        <form className="CreateRecipeForm">
          <div className="RecipeName">
            <label htmlFor="RecipeName">Recipe Name</label>
            <input
              type="email"
              className="form-control"
              id="RecipeName"
              placeholder="Ex: Green Bean Casserole"
            />
          </div>
          <div className="Servings">
            <label htmlFor="Servings">Servings:</label>
            <select className="form-control" id="Servings">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12+</option>
            </select>
          </div>
          <div className="PrepTime">
            <label htmlFor="PrepTime">Prep Time</label>
            <input
              type="text"
              className="form-control"
              id="PrepTime"
              placeholder="15 mins"
            />
          </div>
          <div className="CookTime">
            <label htmlFor="CookTime">Cook Time</label>
            <input
              type="text"
              className="form-control"
              id="CookTime"
              placeholder="30 mins"
            />
          </div>
          <div className="Ingredients">
            <label htmlFor="Ingredients">Ingredients</label>
            <textarea className="form-control" id="Ingredients" rows="5" />
          </div>
          <div className="Directions">
            <label htmlFor="Directions">Directions</label>
            <textarea className="form-control" id="Directions" rows="5" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateRecipe;
