import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { Token } from "./Token";

export enum BUY_REASON {
  // 1.暴力捡垃圾
  VIOLENCE = "violence",
  // 2.聪明钱亏麻
  SMART = "smart",
  // 3.策略型交易
  TACTICS = "tactics",
}

@Entity()
export class HoldToken {
  @PrimaryColumn()
  id?: string;

  @Column({default: '', nullable: true})
  sell_id?: string;

  @Column({name:'tokenAddress'})
  address: string;

  @Column()
  name?: string;

  @Column()
  symbol?: string;

  @Column({default: ''})
  buy_price?: string;

  @Column({default: ''})
  buy_amount?: string;

  // 1.暴力捡垃圾 2.聪明钱亏麻 3.策略型交易
  @Column({
    type: "enum",
    enum: BUY_REASON,
    default: BUY_REASON.VIOLENCE,
  })
  buy_reason: BUY_REASON;

  @Column("timestamp")
  buy_timestamp?: Date;

  @ManyToOne(() => Token, token => token.holdTokens)
  token?: Token;
}
