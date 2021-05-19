import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IUser } from 'src/common';

import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  getUsers(): Observable<IUser[]> {
    return this.userService.find().pipe();
  }

  @Get(':id')
  getUser(@Param('id') id: string): Observable<IUser> {
    return this.userService.findOne({ id });
  }

  @Post()
  createUser(@Body() body: CreateUserDto): Observable<IUser> {
    return this.userService.create(body);
  }

  @Put()
  updateUser(@Body() body: UpdateUserDto): Observable<IUser> {
    const { id, ...data } = body;
    return this.userService.update(id, data);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Observable<IUser> {
    return this.userService.delete(id);
  }
}
