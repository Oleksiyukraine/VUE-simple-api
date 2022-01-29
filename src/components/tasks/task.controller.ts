import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-tasks.dto';
import { ITask } from './interfaces/task.interface';
import { TaskService } from './task.service';

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  listTasks(): Promise<ITask[]> {
    return this.taskService.list();
  }

  @Get(':id')
  getTasksById(@Param('id') id: string): Promise<ITask> {
    return this.taskService.getById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<ITask> {
    return this.taskService.create(createTaskDto);
  }

  @Delete(':id')
  removeTask(@Param('id') id: string): Promise<ITask> {
    return this.taskService.remove(id);
  }

  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<ITask> {
    return this.taskService.update(id, updateTaskDto);
  }
}
