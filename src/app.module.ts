import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { router } from 'json-server';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(router('db.json')).forRoutes('json');
  }
}
