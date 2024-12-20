import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstname: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(100)
  lastname?: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(96)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(96)
  password: string;
}
