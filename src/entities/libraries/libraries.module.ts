import { Module } from '@nestjs/common';
import { LibrariesService } from './libraries.service';
import { LibrariesController } from './libraries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrariesRepository } from './libraries.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LibrariesRepository])],
  controllers: [LibrariesController],
  providers: [LibrariesService],
})
export class LibrariesModule {}
