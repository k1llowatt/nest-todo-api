import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/controllers/todo.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), TodoModule],
  controllers: [TodoController],
  providers: [AppService],
})
export class AppModule {}
