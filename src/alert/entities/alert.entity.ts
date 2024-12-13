import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AlertType } from '../../alert-type/entities/alert-type.entity';

@ObjectType()
@Entity()
export class Alert {
  @PrimaryGeneratedColumn('uuid')
  @Field({ description: 'ID of the alert' })
  id: string;

  @Column('varchar', { length: 200 })
  @Field({ description: 'Name of the alert' })
  title: string;

  @Column('varchar', { length: 500 })
  @Field({ description: 'Description of the alert' })
  description: string;

  @Column('uuid')
  @Field({ description: "Who's the creator of this alert" })
  userId: string;

  @Column('uuid', { nullable: true })
  @Field({ description: 'To which alert type this alert belongs' })
  alertTypeId: string | null;

  @ManyToOne(() => AlertType, { nullable: true })
  @JoinColumn()
  @Field(() => AlertType, {
    description: 'Alert type of the alert',
    nullable: true,
  })
  alertType: AlertType | null;

  @CreateDateColumn()
  @Field({ description: 'Creation date of the alert' })
  createdAt: Date;

  @CreateDateColumn()
  @Field({
    description: "Date of last time that we've updated this alert",
  })
  updatedAt: Date;
}