import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDto, UpdateDto } from './dto';
import { TodoService } from '../services/todo.service';
import { Todo } from '../entities/todo.entity';

@Controller('/rest/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAction(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async getOneAction(@Param('id') id: string): Promise<Todo> {
    const todo = this.todoService.findOne(id);
    if (todo === undefined) {
      console.log('Exception');
      throw new HttpException('Exception', HttpStatus.NOT_FOUND);
    }
    console.log(todo);
    return todo;
  }

  @Post()
  createAction(@Body() createDto: CreateDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createDto.title;
    if (todo.isCompleted !== undefined) {
      todo.isCompleted = createDto.isCompleted;
    }
    console.log(`post ` + todo.title);
    return this.todoService.create(todo);
  }

  @Put(':id')
  async updateAction(
    @Param('id') id: string,
    @Body() { title, isCompleted = false }: UpdateDto,
  ): Promise<Todo> {
    const todo = await this.todoService.findOne(id);
    console.log(todo);
    if (todo === undefined) {
      console.log('Exception');
      throw new HttpException('Exception', HttpStatus.NOT_FOUND);
    }
    todo.title = title;
    todo.isCompleted = isCompleted;
    return this.todoService.update(todo);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void> {
    return this.todoService.remove(id);
  }
  /*  @Delete()
  deleteAllAction(@Param('id') id: string): Promise<void> {
    return this.todoService.remove();
  }*/
}
