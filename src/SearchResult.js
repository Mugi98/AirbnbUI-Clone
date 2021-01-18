import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({img, location, title, description, star, price, total,}) {
    return (
        <div className="searchResult">
            <img src={img} alt=''/>
            <FavoriteBorderIcon className="searchResult-heart" />
            <div className="SearchResult-info">
                <div className="SearchResult-infoTop">
                    <p>{location}</p>
                    <h3><strong>{ title}</strong></h3>
                    <p>______</p>
                    <p>{ description }</p>
                </div>
                <div className="SearchResult-infoBottom">
                    <div className="SearchResult-star">
                        <p>
                        <StarIcon />
                        <strong>{star}</strong>
                        </p>
                    </div>
                    <div className="SearchResult-price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
