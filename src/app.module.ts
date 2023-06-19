import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimesModule } from './times.module';

@Module({
  imports: [
    TimesModule,
    MongooseModule.forRoot(
      'mongodb://root:password@localhost/soccer?authSource=admin',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
