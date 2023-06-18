import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimesModule } from './times.module';

@Module({
  imports: [
    TimesModule,
    MongooseModule.forRoot(
      'mongodb://root:password@localhost/soccer?authSource=admin',
    ),
    MongooseModule.forRoot(
      'mongodb+srv://root:19cm46d0QJhQfR70@cluster.y4ynqbe.mongodb.net/soccer',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
