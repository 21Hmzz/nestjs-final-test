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
import { UserForm } from './UserForm';

function UserAddSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Add User</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        You are about to add a new user to the system
                    </SheetTitle>
                    <SheetDescription>
                        <UserForm />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

export default UserAddSheet;
