import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { Post } from './posts/post.entity';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { Tag } from './tags/tag.entity';
import { MetaOption } from './meta-options/meta-option.entity';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        // entities: [User, Post, Tag, MetaOption],
        autoLoadEntities: true,
        synchronize: true,
        username: 'postgres',
        password: 'Prats@1978',
        database: 'nestjs-blog',
        host: 'localhost',
        port: 5432,
      }),
    }),
    TagsModule,
    MetaOptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
