import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Server')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  isServerUp(): string {
    return this.appService.isServerUp();
  }
}
