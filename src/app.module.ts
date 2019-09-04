import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { router } from 'json-server';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(router('db.json')).forRoutes('json');
  }
}
