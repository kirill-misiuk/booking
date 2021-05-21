import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { IUser, UserResponseDto } from 'src/common';
import { DeleteResult } from 'typeorm/index';

import { CreateUserDto } from '../../common';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  @ApiOperation({ summary: 'Get list of users' })
  @ApiResponse({ status: 200, type: [UserResponseDto] })
  getUsers(): Observable<IUser[]> {
    return this.userService.find();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user' })
  @ApiResponse({ status: 200, type: UserResponseDto })
  getUser(@Query('id') id: string): Observable<IUser> {
    return this.userService.findOne({ id });
  }

  @Post()
  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({ status: 200, type: UserResponseDto })
  createUser(@Body() body: CreateUserDto): Observable<IUser> {
    return this.userService.create(body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete exist user' })
  @ApiResponse({ status: 200, type: UserResponseDto })
  deleteUser(@Param('id') id: string): Observable<DeleteResult> {
    return this.userService.delete(id);
  }
}
