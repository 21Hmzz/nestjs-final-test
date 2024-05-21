import Image from 'next/image';
import UserList from './users/UserList';
import UserAddSheet from './users/UserAddSheet';
import TaskList from './task/TaskList';

export default function Home() {
    return (
        <main className="flex min-h-screen w-screen">
            <div className="p-4 flex flex-col w-1/3 h-full bg-white">
                <div className="flex items-center justify-between">
                    <h1>User list</h1>
                    <UserAddSheet />
                </div>
                <UserList />
            </div>
            <div className="w-2/3 h-full">
                <TaskList />
            </div>
        </main>
    );
}
