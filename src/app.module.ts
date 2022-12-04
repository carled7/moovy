import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { UsersEntity } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { LibrariesModule } from './libraries/libraries.module';
import { MoviesInLibraryModule } from './movies-in-library/movies-in-library.module';
import { LibrariesEntity } from './libraries/libraries.entity';
import { MoviesInLibraryEntity } from './movies-in-library/movies-in-library.entity';

@Module({
  imports: [
    MoviesModule,
    UsersModule,
    LibrariesModule,
    MoviesInLibraryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'moovy',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      entities: [UsersEntity, LibrariesEntity, MoviesInLibraryEntity],
      migrations: [],
    }),
    LibrariesModule,
    MoviesInLibraryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
