'use client';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { getTasks, getUsers } from '@/server/action';
import { Task, User } from '@/type';
import React from 'react';
import { TaskForm } from './TaskForm';
import TaskAddSheet from './TaskAddSheet';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

function TaskList() {
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [userId, setUserId] = React.useState<number>(0);
    const [users, setUsers] = React.useState<User[]>([]);
    const getTasksList = async () => {
        const response = await getTasks(userId);
        setTasks(response);
    };
    const getUsersList = async () => {
        const response = await getUsers();
        setUsers(response);
    };
    React.useEffect(() => {
        getTasksList();
    }, [userId]);
    React.useEffect(() => {
        getUsersList();
    }, []);
    return (
        <div className="h-full w-full p-4">
            <div className="mb-4 w-full flex items-center justify-between">
                <Select onValueChange={(value) => setUserId(Number(value))}>
                    <SelectTrigger className="w-2/3">
                        <SelectValue placeholder="Select a user" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Select a user</SelectLabel>
                            {users.map((user, index) => (
                                <SelectItem
                                    key={index}
                                    value={user.id.toString()}
                                >
                                    {user.email}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {userId !== 0 && <TaskAddSheet userId={userId} />}
            </div>
            {tasks.length === 0 && <Badge>No tasks found</Badge>}
            {tasks.length > 0 && (
                <div className="grid grid-cols-2">
                    {tasks.map((task, index) => (
                        <Card key={index} className="m-2">
                            <CardHeader>
                                <CardTitle>{task.name}</CardTitle>
                            </CardHeader>
                            <CardFooter>
                                <Badge>Priority : {task.priority}</Badge>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskList;
