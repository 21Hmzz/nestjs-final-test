import {
    Controller,
    HttpException,
    Post,
    HttpStatus,
    Body,
    Get,
} from '@nestjs/common';
import validator from 'validator';

import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}
    // Add a user
    @Post()
    async addUser(@Body('email') email: string) {
        if (!email)
            throw new HttpException(
                'Email is required ' + email,
                HttpStatus.BAD_REQUEST,
            );

        if (!validator.isEmail(email)) {
            throw new HttpException(
                'Invalid email' + email,
                HttpStatus.BAD_REQUEST,
            );
        }
        return this.userService.addUser(email);
    }

    @Get('users')
    async getUsers() {
        return this.userService.getUsers();
    }
}
