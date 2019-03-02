'use strict';

import  React from "react";

const User = props =>{
    const {User} = props;

    return <tr>
        <td>{User.id}</td>
        <td>{User.name}</td>
    </tr>


};

export default User;