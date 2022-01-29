import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import AppController from './app.controller';
import { TaskModule } from '../tasks/task.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://test:PjXjuvi6pSRud5k@cluster0.qqsty.mongodb.net/intership?authSource=admin&replicaSet=atlas-1434b1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    TaskModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
