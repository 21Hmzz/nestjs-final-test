'use client';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { addTask, addUser } from '@/server/action';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Please enter a valid email address',
    }),
    priority: z.coerce.number().int().min(1),
});

export function TaskForm({ userId }: { userId: number }) {
    const toast = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            priority: 1,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const data = {
            ...values,
            userId,
        };
        const res = await addTask(data);
        if (res.id) {
            toast.toast({
                title: 'Task added successfully',
                description: 'The task has been added successfully',
            });
        } else {
            toast.toast({
                title: 'Task not added',
                description: res.message,
                variant: 'destructive',
            });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Task name" {...field} />
                            </FormControl>
                            <FormDescription>
                                The name of the task
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Priority</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Priority"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                The priority of the task
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
