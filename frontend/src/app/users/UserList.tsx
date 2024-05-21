'use client';
import { Badge } from '@/components/ui/badge';
import { getUsers } from '@/server/action';
import { User } from '@/type';
import React from 'react';

function UserList() {
    const [users, setUsers] = React.useState<User[]>([]);
    const getUsersList = async () => {
        const response = await getUsers();
        setUsers(response);
    };
    React.useEffect(() => {
        getUsersList();
    }, []);
    return (
        <div className="h-full">
            {users.length === 0 && <Badge>No users found</Badge>}
            <ul>
                {users.map((user, index) => (
                    <li className="border border-gray-300 p-4 my-2" key={index}>
                        {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
