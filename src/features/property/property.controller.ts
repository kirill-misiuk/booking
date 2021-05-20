import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { DeleteResult } from 'typeorm/index';

import { CreatePropertyDto, IProperty, PropertyResponseDto } from '../../common';
import { PropertyService } from './property.service';

@ApiTags('property')
@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Get list of properties' })
  getProperties(): Observable<IProperty[]> {
    return this.propertyService.find();
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Get list of properties', type: PropertyResponseDto })
  getProperty(@Query('id') id: string): Observable<IProperty> {
    return this.propertyService.findOne({ id });
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Creates new property', type: PropertyResponseDto })
  createProperty(@Body() body: CreatePropertyDto): Observable<IProperty> {
    return this.propertyService.create(body);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete exists property' })
  deleteProperty(@Param('id') id: string): Observable<DeleteResult> {
    return this.propertyService.delete(id);
  }
}
