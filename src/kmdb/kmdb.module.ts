import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { KmdbController } from './kmdb.controller';
import { KmdbService } from './kmdb.service';

@Module({
  imports: [HttpModule],
  controllers: [KmdbController],
  providers: [KmdbService],
})
export class KmdbModule {}
