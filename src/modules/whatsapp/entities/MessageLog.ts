import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('message_logs')
export class MessageLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  phone!: string;

  @Column('text')
  message!: string;

  @Column()
  status!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}
