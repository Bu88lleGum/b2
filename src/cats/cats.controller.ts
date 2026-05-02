import { Controller, Get, Post, Body, Headers, Redirect, Query, Param, ParseIntPipe, UseFilters, UseGuards } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateCatDto } from './dto/createCatDto';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';

import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('cats')
@UseGuards(RolesGuard) // Protects all routes in this controller using the RolesGuard
export class CatsController {
  
  constructor(private readonly catsService: CatsService) {} 

  @Get('breed')
  findBreed(): string {
    return "this is a cat breed";
  }

  @Get('test')
  findReq(@Headers() headers: string) {
    return {
      message: "the request",
      headers: headers
    };
  }

  @Get('concrete')
  findConcreteComponentFromHeaders(
    @Headers('host') host: string, 
    @Headers('connection') connection: string) {
    return {
      message: "here is the particular parameters of the headers",
      connection: connection,
      host: host
    };
  }

  @Get('docs')
  @Redirect('https://youtube.com', 302)
  getDocs(@Query('version') version) {
    switch (version) {
      case '5':
        return { url: 'https://youtu.be/XSue75OBSDc?si=zfn7ir_i7Ga-7meu' };
      default:
        return;
    }
  }

  @Get('observ')
  getData(): Observable<any> {
    return of({ message: 'Hello' }).pipe(
      map(v => ({ ...v, date: Date.now() })),
      map(v => ({ ...v, server: "server" })),
      map(v => ({ ...v, help: "help" }))
    );
  }

  @Get('promises')
  async promis(): Promise<any> {
    const data = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m");
    const res = await data.json();
    return res;
  }

  @Post("postus")
  @Roles(["admin"]) // Specifies that only 'admin' roles can access this specific route
  async postus(@Body() createCatDto: CreateCatDto) {
    const data = await createCatDto; 
    const res = { ...data, date: Date.now() };
    return res;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    const newCat = {
      ...createCatDto,
      id: Date.now(), 
    };
    
    this.catsService.create(newCat);
  }

  @Get("findAll")
  async findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  @UseFilters(HttpExceptionFilter) 
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }

}