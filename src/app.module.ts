import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import baseConfig from './config/base.config';
import { DatabaseModule } from './database/database.module';
import { ClientModule } from './entities/client/client.module';
import { LocalsModule } from './entities/local/locals.module';
import { RepoModule } from './repos/repo.module';
config(); // needed?

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [baseConfig],
      isGlobal: true,
      envFilePath:
        ENV === 'development' ? '.env.development' : '.env.production',
    }),
    DatabaseModule,
    RepoModule,
    // Entities
    ClientModule,
    LocalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
