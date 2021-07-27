import React, {FC, useEffect} from 'react'
import {useAction} from '../hooks/useAction'  
import { useTypedSelector } from '../hooks/useTypedSelector'
 
const UserList: FC = () => {
    const {users,error, loading} = useTypedSelector(state=>state.userReducer)
    const {fetchUsers} = useAction();
    
    useEffect(()=>{
        fetchUsers()
    }, [])

 if(loading){
        return <h1>Идет загрузка</h1> 
    }

 if(error){
        return <h1>{error}</h1> 
    }


     return (
    <>
   {users.map(user => 
    <div>{user.name}</div>)}
    </>
    );
}

export default UserList;