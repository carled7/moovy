import { Module } from '@nestjs/common';
import { LibrariesService } from './libraries.service';
import { LibrariesController } from './libraries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrariesEntity } from './libraries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LibrariesEntity])],
  controllers: [LibrariesController],
  providers: [LibrariesService],
})
export class LibrariesModule {}
