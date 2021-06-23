import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], // NodeJS의 라우터 역할
  providers: [MoviesService],
})
export class AppModule {}
