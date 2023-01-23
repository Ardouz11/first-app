import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Hello';
  }
  getRoot(): string {
    return 'Hello World from Root!';
  }
}
