export class CreatePhotoDto {
  readonly name: string;
  readonly description: string;
  readonly filename: string;
  readonly views: number;
  readonly isPublished: boolean;
}
