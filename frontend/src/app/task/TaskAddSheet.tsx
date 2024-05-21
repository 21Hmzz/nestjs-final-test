import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { TaskForm } from './TaskForm';

function TaskAddSheet({ userId }: { userId: number }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Add task</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        You are about to add a new task to the system
                    </SheetTitle>
                    <SheetDescription>
                        <TaskForm userId={userId} />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

export default TaskAddSheet;
