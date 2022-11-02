import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({
    example: 'username@gmail.com',
    description: 'User email',
  })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Incorrect e-mail' })
  readonly email: string

  @ApiProperty({
    example: 'secretpassword',
    description: 'User password',
  })
  @IsString({ message: 'Must be string' })
  @Length(4, 32, { message: 'Must be more than 4 and less than 32 symbols' })
  readonly password: string
}
