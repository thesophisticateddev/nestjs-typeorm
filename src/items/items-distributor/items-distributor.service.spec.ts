import { Test, TestingModule } from '@nestjs/testing';
import { ItemsDistributorService } from './items-distributor.service';

describe('ItemsDistributorService', () => {
  let service: ItemsDistributorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsDistributorService],
    }).compile();

    service = module.get<ItemsDistributorService>(ItemsDistributorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
