export type User = {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
};

export type UserCreatePayload = {
    email: string;
};

export type Task = {
    id: number;
    name: string;
    userId: number;
    priority: number;
};

export type TaskCreatePayload = {
    name: string;
    userId: number;
    priority: number;
};
