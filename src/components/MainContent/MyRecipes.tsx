import React from "react";

class MyRecipes extends React.Component<{ something: string }, {}> {
  render() {
    return (
      <div className="container myRecipes">
        <div className="row">
          <div className="col-md-3 borderedHeader">Appetizers</div>
          <div className="col-md-3 borderedHeader">Entrees</div>
          <div className="col-md-3 borderedHeader">Sides</div>
          <div className="col-md-3">Deserts</div>
        </div>
        <div className="row">
          <div className="col-md-4 borderedHeader">Soups</div>
          <div className="col-md-4 borderedHeader">Breads</div>
          <div className="col-md-4">Beverages</div>
        </div>
        <div>{this.props.something}</div>
      </div>
    );
  }
}

export default MyRecipes;
