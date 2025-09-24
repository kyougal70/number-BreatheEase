import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'img'),
      serveRoot: '/img',
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
