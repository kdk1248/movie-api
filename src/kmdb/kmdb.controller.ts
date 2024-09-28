import { Controller, Get } from '@nestjs/common';
import { KmdbService } from './kmdb.service';

@Controller('movies')
export class KmdbController {
  constructor(private readonly kmdbService: KmdbService) {}

  @Get()
  async getAllMovies() {
    try {
      const movieData = await this.kmdbService.getAllMovieData();
      return movieData;
    } catch (error) {
      console.error('Error fetching movie data:', error);
      throw new Error('서버 오류가 발생했습니다.');
    }
  }
}
