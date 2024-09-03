import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserOrdersController } from './user-orders/user-orders.controller';
import { UserOrdersService } from './user-orders/user-orders.service';
import { UserOrder } from './entities/user-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserOrder])],
  controllers: [UsersController, UserOrdersController],
  providers: [UsersService, UserOrdersService],
})
export class UsersModule {}
