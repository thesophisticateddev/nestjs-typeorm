import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateUserOrderDto {
  @IsString()
  @IsNotEmpty()
  deliveryData: string;
  @IsString()
  @IsNotEmpty()
  deliveryDate: Date;

  @IsUUID()
  @IsNotEmpty()
  userId: string;
}
