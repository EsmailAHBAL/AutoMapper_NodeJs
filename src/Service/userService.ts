import {
    createMap,
    createMapper,
    forMember,
    ignore,
    mapFrom
} from '@automapper/core';
import {
    UserDto
} from './../Dto/Userdto';
import {
    AppDataSource
} from './../data-source';
import {
    User
} from './../entity/User';
import * as autoMapper from 'automapper-ts-node';

import {
    mapper
} from '../DroFile';
class userService {

    userRepository = AppDataSource.getRepository(User)

    async getAllUsers() {
        createMap(mapper, User, UserDto,
            forMember(
                (destination) => destination.yourFirstName,
                mapFrom((source) => source.firstName)
            ),
            forMember(
                (destination) => destination.yourLastName,
                mapFrom((source) => source.lastName)
            ),
            forMember(
                (destination) => destination.youAge,
                mapFrom((source) => source.age)
            ),forMember((d)=>d.id,ignore())
        )
        const users = await this.userRepository.find()
        
        const data = users.map(user => {
            
            return mapper.map(user, User, UserDto);
            
        })
        
       
        const x =this.touser()
     console.log(x);
     
        return data


    }

    async touser(){

        const usDTO = new UserDto("HAMADA","AOI",20)
        createMap(mapper, UserDto, User,
            forMember(
                (destination) => destination.firstName,
                mapFrom((source) => source.yourFirstName)
            ),
            forMember(
                (destination) => destination.lastName,
                mapFrom((source) => source.yourLastName)
            ),
            forMember(
                (destination) => destination.age,
                mapFrom((source) => source.youAge)
            )
            
        )
 
        return mapper.map(usDTO,UserDto,User)
    }




}

export default new userService()