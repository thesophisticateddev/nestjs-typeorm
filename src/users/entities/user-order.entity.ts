import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { BaseEntity } from 'src/utils/base.entity';

@Entity()
export class UserOrder extends BaseEntity {
  @Column({ length: 300, nullable: false })
  deliveryData: string;

  @Column({ type: 'date', nullable: false })
  deliveryDate: Date;

  @ManyToOne(() => User, (user) => user.userOrders, { cascade: ['insert'] })
  user: User;

  static fromDto(dto: Partial<UserOrder>) {
    // const order = new UserOrder();
    // order.deliveryData = dto.deliveryData;
    // order.deliveryDate = dto.deliveryDate;
    // order.user = dto.user;
    const order = Object.assign(new UserOrder(), dto);
    return order;
  }
}
