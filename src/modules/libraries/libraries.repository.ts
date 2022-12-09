import { EntityRepository, Repository } from 'typeorm';
import { AddReviewDto } from './dto/add-review.dto';
import { LibrariesEntity } from './libraries.entity';

@EntityRepository(LibrariesEntity)
export class LibrariesRepository extends Repository<LibrariesEntity> {
  async addReview(libraryData: AddReviewDto) {
    this
      .query(`UPDATE libraries SET review = pg_read_binary_file('${libraryData.filePath}')
        WHERE id = '${libraryData.libraryId}'`);
  }
}
