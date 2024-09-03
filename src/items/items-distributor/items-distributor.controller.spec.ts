import { Test, TestingModule } from '@nestjs/testing';
import { ItemsDistributorController } from './items-distributor.controller';

describe('ItemsDistributorController', () => {
  let controller: ItemsDistributorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsDistributorController],
    }).compile();

    controller = module.get<ItemsDistributorController>(ItemsDistributorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
