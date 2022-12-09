import { IsString, IsUUID } from 'class-validator';

export class AddReviewDto {
  @IsUUID()
  libraryId: string;

  @IsString()
  filePath: string;
}
