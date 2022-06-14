import { Test, TestingModule } from '@nestjs/testing';
import { KambingService } from './kambing.service';

describe('KambingService', () => {
  let service: KambingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KambingService],
    }).compile();

    service = module.get<KambingService>(KambingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
