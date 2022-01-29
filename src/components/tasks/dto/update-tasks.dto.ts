import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @IsOptional()
  desc?: string;
}
