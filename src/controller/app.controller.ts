import { Body, Controller, Get, Post } from '@nestjs/common';
import { TimeService } from '../service/app.service';
import timeDTO from 'src/interfaces/times';

@Controller()
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @Post('times')
  async createTimeController(@Body() times: timeDTO) {
    const create = await this.timeService.createTime(times);
    return create;
  }

  @Get('times')
  async readTimes() {
    const read = await this.timeService.readTime();
    return read;
  }
}
