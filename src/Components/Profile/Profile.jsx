import React, { use } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext)
    return (
        <div>
            This is Profile: 
            <p>{user.email}</p>
        </div>
    );
};

export default Profile;