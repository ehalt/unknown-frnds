import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';


const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url)
    }
    return (
        <div>
            <div className="friends-bdy">
                <h3>name: {name}</h3>
                <p>email: {email}</p>
                {/* <p>ID: <Link to = {`friend/${id}`}>Show detail about this shithead {id}</Link> </p> */}
                <button className="frnd-btn" onClick={() => handleClick(id)}>Person In Detail</button>
            </div>
        </div>
    );
};

export default Friend;