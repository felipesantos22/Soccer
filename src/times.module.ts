import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { timesSchema } from './schema/schemas';
import { TimeController } from './controller/app.controller';
import { TimeService } from './service/app.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Times', schema: timesSchema }]),
  ],
  controllers: [TimeController],
  providers: [TimeService],
})
export class TimesModule {}
