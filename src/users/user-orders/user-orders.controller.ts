import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserOrdersService } from './user-orders.service';
import { CreateUserOrderDto } from '../dto/create-user-order.dto';

@Controller('user-orders')
export class UserOrdersController {
  constructor(private readonly userOrderService: UserOrdersService) {}

  @Post()
  createUserOrder(@Body() body: CreateUserOrderDto) {
    return this.userOrderService.createOrder(body);
  }

  @Get(':userId')
  getByUserId(@Param('userId') id: string) {
    return this.userOrderService.findUserOrders(id);
  }

  @Get('/order/:orderId')
  getByOrderId(@Param('orderId') id: string) {
    return this.userOrderService.findOrderById(id);
  }
}
