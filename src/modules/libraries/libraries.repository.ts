import { EntityRepository, Repository } from 'typeorm';
import { AddReviewDto } from './dto/add-review.dto';
import { LibrariesEntity } from './libraries.entity';

@EntityRepository(LibrariesEntity)
export class LibrariesRepository extends Repository<LibrariesEntity> {
  async addReview(libraryData: AddReviewDto) {
    const [audioFile] = await this.query(
      `SELECT pg_read_binary_file('${libraryData.filePath}')`,
    );
    await this.update({ id: libraryData.libraryId }, { review: audioFile });
  }
}
