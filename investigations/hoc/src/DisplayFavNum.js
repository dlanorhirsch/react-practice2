import React from "react";
import {withFavoriteNumber} from "./withFavoriteNumber";

function DisplayFavNumb(props) {
    return (
        <div>My favorite number is: {props.favoriteNumber}</div>
    )
}

export default withFavoriteNumber(DisplayFavNumb)