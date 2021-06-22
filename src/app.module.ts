import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], // NodeJS의 라우터 역할
  providers: [],
})
export class AppModule {}
