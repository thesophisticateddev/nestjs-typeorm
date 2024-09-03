import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class ItemDistributor extends BaseEntity {
  @Column({ type: 'varchar', length: 300, name: 'distributor_name' })
  distributorName: string;

  @Column({ type: 'varchar', length: 300, name: 'distributor_address' })
  distributorAddress: string;

  @Column({ type: 'varchar', length: 300, name: 'distributor_phone' })
  distributorPhone: string;

  @ManyToMany((type) => Item, (item) => item.distributors, { cascade: true })
  @JoinTable()
  items: Item[];
}
