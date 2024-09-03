import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { UserOrder } from './user-order.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  email: string;

  @OneToMany(() => UserOrder, (userOrders) => userOrders.user)
  userOrders: UserOrder[];
}
