import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  desc: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  datEnd: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  status: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  color: string;

  @IsBoolean()
  @ApiProperty()
  @IsNotEmpty()
  new: boolean;
}
