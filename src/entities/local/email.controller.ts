import { Controller, Get, Param } from '@nestjs/common';
import { Email } from './email.entity';
import { LocalsService } from './locals.service';

@Controller('email')
export class EmailController {
  constructor(private readonly localsSvc: LocalsService) {}

  @Get('all')
  getAllEmails(): Promise<Email[]> {
    return this.localsSvc.getAllEmails();
  }

  @Get(':id')
  getEmailById(@Param() { id }: { id: string }): Promise<Email> {
    return this.localsSvc.getEmailById(id);
  }
}
