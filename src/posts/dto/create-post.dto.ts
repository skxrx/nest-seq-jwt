import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreatePostDto {
  @ApiProperty({
    example: 'My Post Title',
    description: 'Post title',
  })
  @IsString({ message: 'Must be string' })
  @Length(3, 32, {
    message: 'Title must be more than 3 and less than 32 symbols',
  })
  readonly title: string

  @ApiProperty({
    example: 'My Post Content',
    description: 'Post content',
  })
  @IsString({ message: 'Must be string' })
  @Length(10, 5000, { message: 'Title must be more than 10 symbols' })
  readonly content: string

  @ApiProperty({
    example: '1',
    description: 'User ID',
  })
  readonly userId: number
}
