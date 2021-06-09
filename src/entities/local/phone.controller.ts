import { Controller, Get, Param } from '@nestjs/common';
import { LocalsService } from './locals.service';
import { Phone } from './phone.entity';

@Controller('phone')
export class PhoneController {
  constructor(private readonly localsSvc: LocalsService) {}

  @Get('all')
  getAllPhones(): Promise<Phone[]> {
    return this.localsSvc.getAllPhones();
  }

  @Get(':id')
  getPhoneById(@Param() { id }: { id: string }): Promise<Phone> {
    return this.localsSvc.getPhoneById(id);
  }
}
