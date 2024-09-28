import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class KmdbService {
  constructor(private readonly httpService: HttpService) {}

  async getAllMovieData() {
    const apiKey = process.env.KMDB_API_KEY; // 환경변수에서 API 키 가져오기
    const url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=N&listCount=500&ServiceKey=${apiKey}`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}
