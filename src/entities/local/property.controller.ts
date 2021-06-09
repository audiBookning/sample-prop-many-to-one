import { Controller, Get, Param } from '@nestjs/common';
import { LocalsService } from './locals.service';
import { Property } from './property.entity';

@Controller('property')
export class PropertyController {
  constructor(private readonly localsSvc: LocalsService) {}

  @Get('all')
  getAllProperties(): Promise<Property[]> {
    return this.localsSvc.getAllProperties();
  }

  @Get(':id')
  getPropertyById(@Param() { id }: { id: string }): Promise<Property> {
    return this.localsSvc.getPropertyById(id);
  }
}
