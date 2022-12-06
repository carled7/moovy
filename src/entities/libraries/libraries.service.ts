import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LibrariesEntity } from './libraries.entity';

@Injectable()
export class LibrariesService {
  constructor(
    @InjectRepository(LibrariesEntity)
    private readonly libraryRepository: Repository<LibrariesEntity>,
  ) {}
}
