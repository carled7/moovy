import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLibraryDto } from './dto/create-library.dto';
import { LibrariesEntity } from './libraries.entity';

@Injectable()
export class LibrariesService {
  constructor(
    @InjectRepository(LibrariesEntity)
    private readonly libraryRepository: Repository<LibrariesEntity>,
  ) {}

  async createLibrary(data: CreateLibraryDto) {
    return this.libraryRepository.save(this.libraryRepository.create(data));
  }
}
