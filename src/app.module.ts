import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { UsersEntity } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { LibrariesModule } from './libraries/libraries.module';
import { MoviesInLibraryModule } from './movies-in-library/movies-in-library.module';

@Module({
  imports: [
    MoviesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'moovy',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      entities: [UsersEntity],
    }),
    LibrariesModule,
    MoviesInLibraryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
