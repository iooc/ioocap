﻿import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    @Render('index')
    root()/* : string */ {
        // return this.appService.root();
        return {message: this.appService.root()}
    }
}
