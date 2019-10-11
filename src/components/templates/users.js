import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AllUsers} from "../../actions";


function Users() {
    const allUsers = useSelector(state => state.users);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>Users</h1>
            <button onClick={() =>dispatch(AllUsers())}>
                Get Users Example API Call
            </button>
            <p>{allUsers}</p>
        </div>
    );
}

export default Users;