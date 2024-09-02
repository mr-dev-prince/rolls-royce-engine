import { Table, Model, Column, PrimaryKey, AutoIncrement, Default, DataType, Validate } from 'sequelize-typescript'
import { v4 as uuidv4, validate } from 'uuid'

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
        unique: true,
        validate: {
            isEmail: true
        }
    })
    email!: string;

    @Column({
        validate: {
            is: /^.{8,}$/
        }
    })
    password!: string

    @Column
    profileImg!: string

    @Column
    dob!: Date

    @Column({
        validate: {
            isNumeric: true,
            is: /^[0-9]{10}$/
        }
    })
    contactNumber!: string

    @Column
    address!: string

}