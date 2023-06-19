import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TimeService } from '../service/app.service';
import timeDTO from 'src/interfaces/times';
import { ObjectId } from 'mongoose';

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

  @Get('times/:_id')
  async findIdTimes(@Param('_id') _id: ObjectId) {
    const findBy = await this.timeService.findById(_id);
    return findBy;
  }

  @Put('times/:_id')
  async updateTimes(@Param('_id') _id: ObjectId, @Body() times: timeDTO) {
    const update = await this.timeService.updateTime(_id, times);
    return update;
  }

  @Delete('times/:_id')
  async name(@Param('_id') _id: ObjectId) {
    const deleteTim = await this.timeService.deleteTime(_id);
    return deleteTim;
  }
}
