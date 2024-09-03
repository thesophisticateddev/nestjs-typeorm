import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { ItemDistributor } from './entities/item.distributor.entity';
import { ItemsDistributorController } from './items-distributor/items-distributor.controller';
import { ItemsDistributorService } from './items-distributor/items-distributor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item, ItemDistributor])],
  controllers: [ItemsController, ItemsDistributorController],
  providers: [ItemsService, ItemsDistributorService],
})
export class ItemsModule {}
