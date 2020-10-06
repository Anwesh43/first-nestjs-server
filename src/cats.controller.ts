import { Controller, Get, Param, Response } from '@nestjs/common';

interface Cat {
    name : string,
    color : string,
    age : number 
}

const cats : Array<Cat> = [
    {name : "Kak", age : 2, color : 'white'},
    {name : "Kaki", age : 1, color : 'black'},
]
@Controller("/cats")
export class CatsController {

    @Get(":id")
    getCat(@Param('id') id : number) : Cat {
        return cats[id]
    } 
}