import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <div className="person-wrap">
                <div className="single-person ">
                    <h3 className="cntr">Details of :  {friend.name}</h3>
                    <hr />
                    <h3>Name: {friend.name}</h3>
                    <p>Email: {friend.email}</p>
                    <p>Phone: {friend.phone}</p>
                    <p>web: {friend.website}</p>
                    <Link to = "/home"><p className="cntr"><mark>wanna go home?</mark></p></Link>
                </div>
            </div>
        </div>
    );
};

export default FriendDetail;