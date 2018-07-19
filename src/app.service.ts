import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!  \r\n成功运行NodeJS服务器  凉宫春日的忧郁';
  }
}
