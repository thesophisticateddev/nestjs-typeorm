import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemDistributor } from '../entities/item.distributor.entity';
import { Repository } from 'typeorm';
import { CreateItemDistributorDto } from '../dto/create-item-distributor';

@Injectable()
export class ItemsDistributorService {
  constructor(
    @InjectRepository(ItemDistributor)
    private readonly itemDistributorRepository: Repository<ItemDistributor>,
  ) {}

  async create(itemDistributor: CreateItemDistributorDto) {
    return this.itemDistributorRepository.save({
      ...itemDistributor,
      isActive: true,
      internalComment: 'New Item',
      lastChangedBy: 'Admin',
      createdBy: 'Admin',
    });
  }

  async findById(id: string) {
    return this.itemDistributorRepository.findOne({
      where: { id },
      relations: ['items'],
    });
  }

  findAll(page: number, limit: number) {
    return this.itemDistributorRepository.find({
      skip: page * limit,
      take: limit,
      where: { isActive: true },
    });
  }
}
