import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserOrder } from '../entities/user-order.entity';
import { Repository } from 'typeorm';
import { CreateUserOrderDto } from '../dto/create-user-order.dto';
import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';

@Injectable()
export class UserOrdersService {
  constructor(
    @InjectRepository(UserOrder)
    private readonly userOrderRepository: Repository<UserOrder>,
    private readonly userService: UsersService,
  ) {}

  async createOrder(createOrder: CreateUserOrderDto) {
    const user = await this.userService.findOne(createOrder.userId);
    const userOrder = UserOrder.fromDto({
      ...createOrder,
      isActive: true,
      internalComment: 'New Order',
      lastChangedBy: createOrder.userId,
      createdBy: createOrder.userId,
      user,
    });

    return this.userOrderRepository.save(userOrder);
  }

  findUserOrders(userId: string) {
    return this.userOrderRepository.find({
      where: { user: { id: userId } },
    });
  }

  findOrderById(orderId: string) {
    return this.userOrderRepository.findOne({
      where: { id: orderId },
      relations: ['items'],
    });
  }
}
