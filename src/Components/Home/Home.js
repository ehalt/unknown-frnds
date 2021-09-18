import React from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <div className="top-txt">
                <h1> Some of my unknown friends here</h1>
                <hr />
            </div>
            <div className="total-frnd">
                {/* <p>Total suckers: {friends.length}</p> */}
                <br /> <br />

                <div className="maped">
                    {
                        friends.map(friend => <Friend friend={friend}></Friend>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;