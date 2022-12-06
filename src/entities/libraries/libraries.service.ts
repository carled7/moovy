import { Injectable } from '@nestjs/common';
import { AddToLibraryDto } from './dto/AddToLibrary.dto';
import { LibrariesRepository } from './libraries.repository';

@Injectable()
export class LibrariesService {
  constructor(private readonly libraryRepository: LibrariesRepository) {}

  async addFavorite(data: AddToLibraryDto) {
    return this.libraryRepository.save(this.libraryRepository.create(data));
  }
}
