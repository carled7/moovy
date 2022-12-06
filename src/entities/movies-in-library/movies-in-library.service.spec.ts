import { Test, TestingModule } from '@nestjs/testing';
import { MoviesInLibraryService } from './movies-in-library.service';

describe('MoviesInLibraryService', () => {
  let service: MoviesInLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesInLibraryService],
    }).compile();

    service = module.get<MoviesInLibraryService>(MoviesInLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
