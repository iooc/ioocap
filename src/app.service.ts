import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!  成功运行NodeJS服务器  11111';
  }
}
