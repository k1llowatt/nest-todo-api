import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { CreateDto, UpdateDto } from './dto';

@Controller('/rest/todo')
export class TodoController {
  @Get()
  getAction(): string {
    return 'GEt All';
  }

  @Get(':id')
  getOneAction(@Param('id') id: string) {
    return `Get one = ${id}`;
  }

  @Post()
  createAction(@Body() todo: CreateDto): CreateDto {
    console.log(todo);
    return todo;
  }

  @Put(':id')
  updateAction(@Param('id') id: string, @Body() todo: UpdateDto): UpdateDto {
    console.log('Search by ID ', todo);
    console.log(todo);
    return todo;
  }

  @Delete(':id')
  deleteAction(): string {
    return 'delete';
  }
}
