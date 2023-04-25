import React from "react";
import { MdSearch } from "react-icons/md";

class MealPlanner extends React.Component<{}, { searchInput: string }> {
  constructor(props: string) {
    super(props);
  }
  SearchRecipes() {
    console.log("hi, search recipes");
  }

  render() {
    return (
      <div className="MealPlanner">
        <div className="table-responsive MealPlanTable">
          <table className="table">
            <thead>
              <tr className="WeekdayNames">
                <td>Sunday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Saturday</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="MealPlanDays">A</td>
                <td className="MealPlanDays">b</td>
                <td className="MealPlanDays">c</td>
                <td className="MealPlanDays">e</td>
                <td className="MealPlanDays">f</td>
                <td className="MealPlanDays">g</td>
                <td className="MealPlanDays">h</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="MealPlanSearch">
          Search Recipes:
          <input
            type="text"
            className="form-control"
            id="CookTime"
            onChange={() => this.SearchRecipes()}
          />
        </div>
      </div>
    );
  }
}
/*


*/
export default MealPlanner;
