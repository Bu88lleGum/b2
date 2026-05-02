import { IsString, IsInt, Min, Max } from "class-validator";

export class CreateDogDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Max(30)
  age: number;

  @IsString()
  breed: string;
}