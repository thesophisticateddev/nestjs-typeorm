import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { ItemDistributor } from './entities/item.distributor.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
    @InjectRepository(ItemDistributor)
    private readonly itemDistributorRepository: Repository<ItemDistributor>,
  ) {}
  create(createItemDto: CreateItemDto) {
    return this.itemRepository.save({
      ...createItemDto,
      isActive: true,
      internalComment: 'New Item',
      lastChangedBy: 'Admin',
      createdBy: 'Admin',
    });
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

  async addItemDistributor(itemId: string, distributorId: string) {
    const item = await this.itemRepository.findOne({ where: { id: itemId } });
    if (item) {
      const distributor = await this.itemDistributorRepository.findOne({
        where: { id: distributorId },
      });
      return this.itemRepository.save({
        ...item,
        distributors: [distributor],
      });
    }
    throw new NotFoundException('Item not found');
  }
}
