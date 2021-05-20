import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { DeleteResult } from 'typeorm/index';

import { CreateRoomDto, FindRoomsDto, IRoom, RoomResponceDto } from '../../common';
import { RoomService } from './room.service';

@ApiTags('room')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Get list for empty rooms' })
  getRooms(): Observable<IRoom[]> {
    return this.roomService.find();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get room', type: RoomResponceDto })
  getRoom(@Query('id') id: string): Observable<IRoom> {
    return this.roomService.findOne({ id });
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Create new room', type: RoomResponceDto })
  createRoom(@Body() body: CreateRoomDto): Observable<IRoom> {
    return this.roomService.create(body);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete exists room' })
  deleteRoom(@Param('id') id: string): Observable<DeleteResult> {
    return this.roomService.delete(id);
  }

  @Post('available')
  @ApiResponse({ status: 200, description: 'find available rooms' })
  findAvailableRooms(@Body() data: FindRoomsDto): Observable<any> {
    return this.roomService.findAvailableRooms(data);
  }
}
