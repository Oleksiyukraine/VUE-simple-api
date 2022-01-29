import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-tasks.dto';
import { TaskEntity } from './entities/task.entity';
import { ITask } from './interfaces/task.interface';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private taskRepository: Model<TaskEntity>) {}

  async list(): Promise<ITask[]> {
    return this.taskRepository.find().limit(20).sort({ createdAt: 1 }).lean();
  }

  async getById(id: string): Promise<ITask> {
    return this.taskRepository.findById(Types.ObjectId(id)).lean();
  }

  async create(createTaskDto: CreateTaskDto): Promise<ITask> {
    const newTask = new this.taskRepository(createTaskDto);
    return newTask.save();
  }

  async remove(id: string): Promise<ITask> {
    return this.taskRepository.findByIdAndRemove(Types.ObjectId(id));
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<ITask> {
    return this.taskRepository.findByIdAndUpdate(
      Types.ObjectId(id),
      updateTaskDto,
      {
        new: true,
      },
    );
  }
}
