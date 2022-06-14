import { Test, TestingModule } from '@nestjs/testing';
import { KambingController } from './kambing.controller';

describe('KambingController', () => {
  let controller: KambingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KambingController],
    }).compile();

    controller = module.get<KambingController>(KambingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
