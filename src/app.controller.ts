import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('pages/index.hbs')
  root() {
    return { message: 'Hello! The world is flat.' };
  }

}

