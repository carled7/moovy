import { Test, TestingModule } from '@nestjs/testing';
import { MoviesInLibraryController } from './movies-in-library.controller';
import { MoviesInLibraryService } from './movies-in-library.service';

describe('MoviesInLibraryController', () => {
  let controller: MoviesInLibraryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesInLibraryController],
      providers: [MoviesInLibraryService],
    }).compile();

    controller = module.get<MoviesInLibraryController>(MoviesInLibraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
