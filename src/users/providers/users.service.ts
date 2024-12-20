import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-user-params.dto';
import { In, Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    // Inject the User Repository here
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    // Check if the user already exists
    const user = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    let newUser: User;
    if (!user) {
      newUser = this.userRepository.create(createUserDto);
      newUser = await this.userRepository.save(newUser);
    }
    return newUser;
  }

  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'John',
        email: 'john@gmail.com',
      },
      {
        firstName: 'John',
        email: 'john@gmail.com',
      },
    ];
  }

  public findOneById(id: string) {
    return {
      id: 1,
      firstName: 'John',
      email: 'john@gmail.com',
    };
  }
}
