import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { DeleteResult } from 'typeorm/index';

import { CreateRoomDto, DateRangeDto, IRoom, RoomResponseDto } from '../../common';
import { RoomService } from './room.service';

@ApiTags('room')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {
  }

  @Get()
  @ApiOperation({ summary: 'Get list for rooms' })
  getRooms(): Observable<IRoom[]> {
    return this.roomService.find();
  }

  @Get('get-room')
  @ApiOperation({ summary: 'Get room' })
  @ApiResponse({ status: 200, type: RoomResponseDto })
  getRoom(@Query('id') id: string): Observable<IRoom> {
    return this.roomService.findOne({ id });
  }

  @Post()
  @ApiOperation({ summary: 'Get room' })
  createRoom(@Body() body: CreateRoomDto): Observable<IRoom> {
    return this.roomService.create(body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete exists room' })
  deleteRoom(@Param('id') id: string): Observable<DeleteResult> {
    return this.roomService.delete(id);
  }

  @Get('available')
  @ApiOperation({ summary: 'Find available rooms' })
  findAvailableRooms(@Query() data: DateRangeDto): Observable<IRoom[]> {
    return this.roomService.findAvailableRooms(data);
  }
}
