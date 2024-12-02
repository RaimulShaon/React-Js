import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

const Profile = () => {
    const {user}=useContext(UserContext)
    if (!user) {
        
        return (
            <div>
               Please LogIN
            </div>
        );
    }
    return <div>WelCome {user.userName}</div>
};

export default Profile;