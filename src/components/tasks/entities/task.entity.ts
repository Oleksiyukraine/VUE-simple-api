import { Document } from 'mongoose';

export class TaskEntity extends Document {
  readonly title: string;
  readonly desc: string;
  readonly datEnd: string;
  readonly status: string;
  readonly color: string;
  readonly new: boolean;
}
