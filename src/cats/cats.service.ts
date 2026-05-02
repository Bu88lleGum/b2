import { Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from '../interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat {
    const nedded = this.cats.find((cat) => cat.age === id);
    
    if (!nedded) {
      throw new NotFoundException("Cat with this age was not found");
    }
    
    return nedded;
  }
}