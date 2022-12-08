import { InvitationsModule } from './entities/invitations/invitations.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './api/movies/movies.module';
import { UsersEntity } from './entities/users/users.entity';
import { UsersModule } from './entities/users/users.module';
import { LibrariesModule } from './entities/libraries/libraries.module';
import { MoviesInLibraryModule } from './entities/movies-in-library/movies-in-library.module';
import { LibrariesEntity } from './entities/libraries/libraries.entity';
import { MoviesInLibraryEntity } from './entities/movies-in-library/movies-in-library.entity';
import { InvitationsEntity } from './entities/invitations/invitations.entity';

@Module({
  imports: [
    InvitationsModule,
    MoviesModule,
    UsersModule,
    LibrariesModule,
    MoviesInLibraryModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'moovy',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      entities: [
        UsersEntity,
        LibrariesEntity,
        MoviesInLibraryEntity,
        InvitationsEntity,
      ],
      migrations: [],
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
