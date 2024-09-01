import {Table, Model, Column, PrimaryKey, AutoIncrement} from "sequelize-typescript";

@Table({
    tableName: "products",
    timestamps: true,
})

export class products extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @Column
    name!: string;

    @Column
    price!: number;

    @Column
    description!: string;
}
