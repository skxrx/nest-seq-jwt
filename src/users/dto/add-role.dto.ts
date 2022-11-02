import { IsNumber, IsString } from 'class-validator'

export class AddRoleDto {
  @IsString({ message: 'Username incorrect' })
  readonly value: string
  @IsNumber({}, { message: 'User ID incorrect' })
  readonly userId: number
}
