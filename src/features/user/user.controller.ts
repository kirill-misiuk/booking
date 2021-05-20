import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { IUser, UserResponceDto } from 'src/common';
import { DeleteResult } from 'typeorm/index';

import { CreateUserDto } from '../../common';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Get list of users' })
  getUsers(): Observable<IUser[]> {
    return this.userService.find();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get user', type: UserResponceDto })
  getUser(@Query('id') id: string): Observable<IUser> {
    return this.userService.findOne({ id });
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Create new user', type: UserResponceDto })
  createUser(@Body() body: CreateUserDto): Observable<IUser> {
    return this.userService.create(body);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete exist user', type: UserResponceDto })
  deleteUser(@Param('id') id: string): Observable<DeleteResult> {
    return this.userService.delete(id);
  }
}
