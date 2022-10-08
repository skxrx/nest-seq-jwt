import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    example: 'username@gmail.com',
    description: 'User email',
  })
  readonly email: string

  @ApiProperty({
    example: 'secretpassword',
    description: 'User password',
  })
  readonly password: string
}
