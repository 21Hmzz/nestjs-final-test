'use server';
import axios, { AxiosError } from 'axios';

import { TaskCreatePayload, UserCreatePayload } from '@/type';

export const getUsers = async () => {
    const response = await fetch('http://localhost:3000/user/users');
    return await response.json();
};

export const addUser = async (user: UserCreatePayload) => {
    try {
        const response = await axios.post(
            process.env.API_ENDPOINT + '/user/',
            user,
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            return axiosError.response?.data;
        }
    }
};

export const getTasks = async (userId: number) => {
    try {
        const response = await axios.get(
            process.env.API_ENDPOINT + '/task/user/' + userId,
        );
        response.data.sort((a: any, b: any) => a.priority - b.priority);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            return axiosError.response?.data;
        }
    }
};

export const addTask = async (task: TaskCreatePayload) => {
    try {
        const response = await axios.post(
            process.env.API_ENDPOINT + '/task/',
            task,
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            return axiosError.response?.data;
        }
    }
};
