import {
    Controller, Post, Body, Get, Param
  } from '@nestjs/common';

  
  @Controller()
  export class AuthController {
    @Post()
    async signup(@Body() userData) {
        console.log(userData);
    }
  }
  