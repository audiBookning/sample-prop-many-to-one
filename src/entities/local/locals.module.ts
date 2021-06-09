import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailController } from './email.controller';
import { LocalsService } from './locals.service';
import { PhoneController } from './phone.controller';
import { PropertyController } from './property.controller';
import { WebsiteController } from './website.controller';

@Module({
  imports: [ConfigService],
  controllers: [
    EmailController,
    PhoneController,
    PropertyController,
    WebsiteController,
  ],
  providers: [LocalsService],
  exports: [],
})
export class LocalsModule {}
