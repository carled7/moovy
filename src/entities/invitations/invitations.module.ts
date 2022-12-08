import { Module } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { InvitationsController } from './invitations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvitationRepository } from './invitations.repository';

@Module({
  imports: [TypeOrmModule.forFeature([InvitationRepository])],
  controllers: [InvitationsController],
  providers: [InvitationsService],
})
export class InvitationsModule {}
