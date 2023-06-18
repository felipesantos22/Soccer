import { Injectable } from '@nestjs/common';
import timeDTO from 'src/interfaces/times';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TimeService {
  constructor(
    @InjectModel('Times') private readonly timesModel: Model<timeDTO>,
  ) {}

  async createTime(time: timeDTO) {
    const create = new this.timesModel(time);
    return create.save();
  }

  async readTime() {
    const read = this.timesModel.find().exec();
    return read;
  }
}
