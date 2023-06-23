import { Test, TestingModule } from '@nestjs/testing';
import { ActionRunnerService } from './action-runner.service';

describe('ActionRunnerService', () => {
  let service: ActionRunnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActionRunnerService],
    }).compile();

    service = module.get<ActionRunnerService>(ActionRunnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
