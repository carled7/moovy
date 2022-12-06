import { EntityRepository, Repository } from 'typeorm';
import { LibrariesEntity } from './libraries.entity';

@EntityRepository(LibrariesEntity)
export class LibrariesRepository extends Repository<LibrariesEntity> {}
