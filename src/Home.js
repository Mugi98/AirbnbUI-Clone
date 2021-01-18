import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card  from './Card';

function Home() {
    return (
        <div className = 'home'>
            <Banner />
            <div className='home-section'>
                <Card
                    src="https://cdn1.goibibo.com/voy_ing/t_g/e59ed506f52511e78b4b0a4cef95d023.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together
                    led by a world of hosts."
                />
                <Card
                    src="https://cdn1.goibibo.com/voy_ing/t_g/dc72e4e8c3f711e996200242ac110002.jpg"
                    title="Unique Stays"
                    description="Space that are more than just place to sleep."
                />
                <Card
                    src="https://cdn1.goibibo.com/voy_ing/t_g/256ebabe757811eabb1b0242ac110002.jpg"
                    title="Entire Homes"
                    description="Comforatble private places with room for friends or family."
                />
            </div>
            <div className='home-section'>
                <Card
                    src="https://cdn1.goibibo.com/voy_ing/t_g/304d118e056711e88d0802755708f0b3.jpg"
                    title="3 Bedroom flat in Mumbai"
                    description="Unique activities we can do together
                    led by a world of hosts."
                    price = "$770/night"
                />
                <Card
                    src="https://cdn1.goibibo.com/voy_ing/t_g/837608b4d12911e8a9fd0242ac110002.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse."
                    price = "$370/night"
                />
                <Card
                    src="https://cdn1.goibibo.com/voy_ing/t_g/b9bc29666c0211e987520242ac110002.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shooping 
                    complex nearby."
                    price = "$70/night"
                />
            </div>
        </div>
    )
}

export default Home
