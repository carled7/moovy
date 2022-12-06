import { EntityRepository, Repository } from 'typeorm';
import { MoviesInLibraryEntity } from './movies-in-library.entity';

@EntityRepository(MoviesInLibraryEntity)
export class MoviesInLibraryRepository extends Repository<MoviesInLibraryEntity> {}
