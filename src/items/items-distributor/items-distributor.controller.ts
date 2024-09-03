import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ItemsDistributorService } from './items-distributor.service';
import { CreateItemDistributorDto } from '../dto/create-item-distributor';

@Controller('items-distributor')
export class ItemsDistributorController {
  constructor(
    private readonly itemDistributorService: ItemsDistributorService,
  ) {}

  @Post()
  create(@Body() body: CreateItemDistributorDto) {
    return this.itemDistributorService.create(body);
  }

  @Get()
  findAll(@Query('page') page: string) {
    return this.itemDistributorService.findAll(+page, 10);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.itemDistributorService.findById(id);
  }
}
