import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}
  create(createItemDto: CreateItemDto) {
    return this.itemRepository.save(createItemDto);
  }

  findAll() {
    return this.itemRepository.find({
      skip: 0,
      take: 10,
      where: { isActive: true },
    });
  }

  findOne(id: string) {
    return this.itemRepository.findOneBy({ id: id });
  }

  update(id: string, updateItemDto: UpdateItemDto) {
    return this.itemRepository.update(id, updateItemDto);
  }

  remove(id: string) {
    return this.itemRepository.update(id, { isActive: false });
  }
}
