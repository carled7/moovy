import { EntityRepository, Repository } from 'typeorm';
import { MoviesInLibraryEntity } from './movies-in-library.entity';

@EntityRepository(MoviesInLibraryEntity)
export class MoviesInLibraryRepository extends Repository<MoviesInLibraryEntity> {
  async findMoviesFromUser(user) {
    const movies = await this.createQueryBuilder('movies_in_library')
      .innerJoinAndSelect('movies_in_library.library', 'libraries')
      .where('libraries.user_id = :user', { user: user.id });

    const [results, total] = await movies.getManyAndCount();

    return {
      movies: results,
      total,
    };
  }
}
