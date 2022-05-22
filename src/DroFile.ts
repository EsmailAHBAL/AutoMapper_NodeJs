import { UserDto } from './Dto/Userdto';
import { User } from './entity/User';
import { createMapper, MappingProfile } from '@automapper/core';
import { classes } from '@automapper/classes';

// Create and export the mapper
export const mapper = createMapper({
    strategyInitializer: classes(),
  
   
});
