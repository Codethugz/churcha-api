import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/core/guards/auth.guard';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  @ApiOperation({
    description: 'Login',
    tags: ['auth'],
  })
  @ApiBody({
    type: LoginDto,
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: Request & { user: any }) {
    return req.user;
  }
}
