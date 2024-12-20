import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { BullModule } from '@nestjs/bull';
import { EmailProcessor } from './processors/email.processor';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    BullModule.registerQueue({ name: 'email' }),
  ],
  providers: [UserService, EmailProcessor],
  controllers: [UserController],
})
export class UserModule {}
