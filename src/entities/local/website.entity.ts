import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from '../client/client.entity';

@Entity()
export class Website extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // ManyToOne

  @Column()
  clientId: string;

  @ManyToOne(() => Client, (client) => client.websites)
  client: Client;

  // ************

  @Column('text')
  website: string;

  // ************

  @Column({ default: false })
  main: boolean;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
