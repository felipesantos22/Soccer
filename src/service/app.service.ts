import { Injectable } from '@nestjs/common';
import timeDTO from 'src/interfaces/times';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class TimeService {
  constructor(
    @InjectModel('Times') private readonly timesModel: Model<timeDTO>,
  ) {}

  async createTime(time: timeDTO) {
    const create = await this.timesModel.create(time);
    return create;
  }

  async readTime() {
    const read = await this.timesModel.find().exec();
    return read;
  }

  async findById(_id: ObjectId) {
    const findId = await this.timesModel.findById(_id);
    return findId;
  }

  async updateTime(_id: ObjectId, time: timeDTO) {
    const update = await this.timesModel.findByIdAndUpdate(_id, time);
    return update;
  }

  async deleteTime(_id: ObjectId) {
    const deleteTim = await this.timesModel.findByIdAndDelete(_id);
    return deleteTim;
  }
}
