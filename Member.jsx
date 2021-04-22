import React, {useEffect} from 'react';
import {fetchUsers} from "../reducks/users/operations";
import {useDispatch, useSelector} from "react-redux";
import { UserCard } from "../components/UIkit";
import { getUsers } from "../reducks/users/selectors";
import styled from 'styled-components';

const Users = styled.div`
 display:flex;
 justify-content: center;
 flex-wrap        : wrap;
`;

const Members = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const users = getUsers(selector)

    console.log(users)
    
 useEffect(() => {
   dispatch(fetchUsers());
 },[])

return(
<div className="contents-top">
<Users>
{/* 親コンポネートにimagesを渡す */}
{users.length > 0 && (
    users.map(user => (
        <UserCard
            key={user.id} id={user.id} email={user.email} participation={user.participation} username={user.username} images={user.images}
        />
    ))
 )}
</Users>
</div>
   
 )
}

export default Members;