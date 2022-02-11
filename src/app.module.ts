import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/controllers/todo.controller';
import { TodoService } from './todo/services/todo.service';

@Module({
  imports: [TypeOrmModule.forRoot(), TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
