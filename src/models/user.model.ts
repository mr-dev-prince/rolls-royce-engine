import { Table, Model, Column, PrimaryKey, AutoIncrement, Default, DataType } from 'sequelize-typescript'
import { v4 as uuidv4 } from 'uuid'

@Table({
    tableName: 'users',
    timestamps: true,
})

export class User extends Model {
    @PrimaryKey
    @Default(uuidv4)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    id!: number;

    @Column
    name!: string;

    @Column({
        unique: true
    })
    email!: string;

    @Column
    password!: string

    @Column
    profileImg!: string

    @Column
    dateOfBirth!: Date

    @Column
    contactNumber!: string

    @Column
    address!: string

}