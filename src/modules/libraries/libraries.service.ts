import { Injectable } from '@nestjs/common';
import { OMDBService } from 'src/api/OMDB/OMDB.service';
import { UpdateResult } from 'typeorm';
import { MoviesInLibraryService } from '../movies-in-library/movies-in-library.service';
import { AddToLibraryDto } from './dto/add-to-library.dto';
import { LibrariesEntity } from './libraries.entity';
import { LibrariesRepository } from './libraries.repository';

@Injectable()
export class LibrariesService {
  constructor(
    private readonly libraryRepository: LibrariesRepository,
    private readonly moviesInLibraryService: MoviesInLibraryService,
    private readonly omdbService: OMDBService,
  ) {}

  //adds a movie as a favorite
  async addFavorite(
    relationUserMovie: AddToLibraryDto,
  ): Promise<LibrariesEntity> {
    let movieIsKnown = false;

    //checks if the movie selected is already in the database
    movieIsKnown = await this.moviesInLibraryService.hasMovie(
      relationUserMovie.imdbId.toString(),
    );

    if (movieIsKnown) {
      //if it exists, the relation user-movie is create in the libraries table
      const newRelation = this.libraryRepository.create(relationUserMovie);
      return this.libraryRepository.save(newRelation);
    } else {
      //if it doesn`t, it is added to the table moviesInLibrary table ...
      const movie = await this.omdbService.getMovieById(
        relationUserMovie.imdbId.toString(),
      );
      this.moviesInLibraryService.save(movie);
      //...then, its relation with the user is created in the libraries table
      const newRelation = this.libraryRepository.create(relationUserMovie);
      return this.libraryRepository.save(newRelation);
    }
  }

  async remove(data): Promise<void> {
    //throw new NotFoundException();
    await this.libraryRepository.delete({ id: data.id });
  }

  async uploadReview(libraryData): Promise<void> {
    this.libraryRepository.addReview(libraryData);
  }
  async uploadAudio(libraryId, audioFile): Promise<UpdateResult> {
    const newAudio = await this.libraryRepository.update(
      { id: libraryId },
      { review: audioFile },
    );
    return newAudio;
  }

  async getLibraryById(id: string): Promise<LibrariesEntity> {
    return this.libraryRepository.findOne(id);
  }
  async removeReview(libraryId): Promise<void> {
    await this.libraryRepository.update({ id: libraryId }, { review: null });
  }
  /*
  async getMovieById(id: string): Promise<MoviesInLibraryEntity>{
    return this.libraryRepository.
  }*/
}
