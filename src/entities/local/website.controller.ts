import { Controller, Get, Param } from '@nestjs/common';
import { LocalsService } from './locals.service';
import { Website } from './website.entity';

@Controller('website')
export class WebsiteController {
  constructor(private readonly localsSvc: LocalsService) {}

  @Get('all')
  getAllWebsites(): Promise<Website[]> {
    return this.localsSvc.getAllWebsites();
  }

  @Get(':id')
  getWebsiteById(@Param() { id }: { id: string }): Promise<Website> {
    return this.localsSvc.getWebsiteById(id);
  }
}
