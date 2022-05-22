import { AutoMap } from "@automapper/classes"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @AutoMap()
    @PrimaryGeneratedColumn()
     id: number
    @AutoMap()
    @Column()
     firstName: string
    @AutoMap()
    @Column()
     lastName: string
    @AutoMap()
    @Column()
     age: number

    constructor(fn:string,ln:string,age:number)
    {
        this.firstName=fn

        this.lastName=ln
        this.age=age
    }

  
}
