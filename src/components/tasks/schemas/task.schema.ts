import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  versionKey: false,
  timestamps: true,
  collection: 'tasks',
})
export class Tasks {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  desc: string;

  @Prop({ type: Date, required: true })
  datEnd: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: false, default: true })
  new: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Tasks);
