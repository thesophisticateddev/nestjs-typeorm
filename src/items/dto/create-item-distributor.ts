import { IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';

export class CreateItemDistributorDto {
  @IsString()
  @IsNotEmpty()
  distributorName: string;

  @IsString()
  @IsNotEmpty()
  distributorAddress: string;

  @IsString()
  @IsMobilePhone('en-US')
  distributorPhone: string;
}
