import app from "./app"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    app.listen(3311,()=>{
        console.log(`Server Up On The http://localhost:3311`);
        
    })

}).catch(error => console.log(error))
