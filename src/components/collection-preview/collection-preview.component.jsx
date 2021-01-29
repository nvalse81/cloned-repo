import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.component.styles.scss";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
//filter reference
// const drinks = ['Cola', 'Lemonade', 'Coffee', 'Water'];
// const id = 2;
// const removedDrink = drinks[id];
// const filteredDrinks = drinks.filter((drink, index) => index !== id);

export default withRouter(CollectionPreview);
