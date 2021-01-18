import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult'; 

export default function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage-info'>
                <p> 62 Stays : 17 January 2021  to 20 January 2012 : 2 Guests</p>
                <h1>Stay Nearby</h1>
                <Button variant= "outlined">Cancellation Flexibility</Button>
                <Button variant= "outlined">Type of Place</Button>
                <Button variant= "outlined">Price</Button>
                <Button variant= "outlined">Rooms and Beds</Button>
                <Button variant= "outlined">More Filters</Button>
            </div>
            <SearchResult
                img='https://a0.muscache.com/im/pictures/0214f374-fd2a-4403-b6d4-790875085e53.jpg?im_w=1200'
                location='Private room in center of London'
                title='London Studio Apartments'
                description='4 guests : 4 Bedroom : 2 bathroom : Free Parking : Washing Machine'
                star={3.8}
                price='$35 / night'
                total='$200 total'
            />
            <SearchResult
                img='https://a0.muscache.com/im/pictures/0214f374-fd2a-4403-b6d4-790875085e53.jpg?im_w=1200'
                location='Private room in center of London'
                title='London Studio Apartments'
                description='4 guests : 4 Bedroom : 2 bathroom : Free Parking : Washing Machine'
                star={3.8}
                price='$35 / night'
                total='$200 total'
            />
            <SearchResult
                img='https://a0.muscache.com/im/pictures/0214f374-fd2a-4403-b6d4-790875085e53.jpg?im_w=1200'
                location='Private room in center of London'
                title='London Studio Apartments'
                description='4 guests : 4 Bedroom : 2 bathroom : Free Parking : Washing Machine'
                star={3.8}
                price='$35 / night'
                total='$200 total'
            />
            <SearchResult
                img='https://a0.muscache.com/im/pictures/0214f374-fd2a-4403-b6d4-790875085e53.jpg?im_w=1200'
                location='Private room in center of London'
                title='London Studio Apartments'
                description='4 guests : 4 Bedroom : 2 bathroom : Free Parking : Washing Machine'
                star={3.8}
                price='$35 / night'
                total='$200 total'
            />
            <SearchResult
                img='https://a0.muscache.com/im/pictures/0214f374-fd2a-4403-b6d4-790875085e53.jpg?im_w=1200'
                location='Private room in center of London'
                title='London Studio Apartments'
                description='4 guests : 4 Bedroom : 2 bathroom : Free Parking : Washing Machine'
                star={3.8}
                price='$35 / night'
                total='$200 total'
            />
            <SearchResult
                img='https://a0.muscache.com/im/pictures/0214f374-fd2a-4403-b6d4-790875085e53.jpg?im_w=1200'
                location='Private room in center of London'
                title='London Studio Apartments'
                description='4 guests : 4 Bedroom : 2 bathroom : Free Parking : Washing Machine'
                star={3.8}
                price='$35 / night'
                total='$200 total'
            />
        </div>
    )
}
