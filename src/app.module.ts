import { InvitationsModule } from './modules/invitations/invitations.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './api/OMDB/movies.module';
import { UsersEntity } from './modules/users/users.entity';
import { UsersModule } from './modules/users/users.module';
import { LibrariesModule } from './modules/libraries/libraries.module';
import { MoviesInLibraryModule } from './modules/movies-in-library/movies-in-library.module';
import { LibrariesEntity } from './modules/libraries/libraries.entity';
import { MoviesInLibraryEntity } from './modules/movies-in-library/movies-in-library.entity';
import { InvitationsEntity } from './modules/invitations/invitations.entity';
import { AuthModule } from './auth/auth.module';

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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
