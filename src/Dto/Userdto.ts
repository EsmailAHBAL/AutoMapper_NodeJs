import {
  AutoMap
} from '@automapper/classes';
export class UserDto {

  @AutoMap()
  id: number
  @AutoMap()
  yourLastName: string
  @AutoMap()

  yourFirstName: string

  @AutoMap()
  youAge: number


  constructor(fn:string, ln:string, age:number) {

    this.yourFirstName = fn

    this.yourLastName = ln

    this.youAge = age
  }}