import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  itemName: string;
  @IsString()
  description: string;
  @IsNumber()
  quantity: number;
}
