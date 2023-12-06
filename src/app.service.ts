import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  isServerUp(): string {
    return 'Server is up and running!';
  }
}
