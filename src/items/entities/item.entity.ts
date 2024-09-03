import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { ItemDistributor } from './item.distributor.entity';

@Entity()
export class Item extends BaseEntity {
  @Column({ type: 'varchar', length: 300, name: 'item_name' })
  itemName: string;

  @Column({ type: 'varchar', length: 300, name: 'item_description' })
  description: string;

  @Column({ type: 'int', name: 'item_price' })
  quantity: number;

  @ManyToMany(
    (type) => ItemDistributor,
    (itemDistributor) => itemDistributor.items,
  )
  distributors: ItemDistributor[];
}
