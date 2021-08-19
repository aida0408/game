import data from './data';
import {useState} from 'react';

const Users = () => {
    const [users, setUsers] = useState(data)
    return (
        <div>
            {
                users.map(item => (
                        <>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                        </>

                    )
                )
            }
        </div>
    );
};

export default Users;