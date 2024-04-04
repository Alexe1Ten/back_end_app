import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";



export class CreateUserDto {
    @ApiProperty({example: "user@mail.com", description: "E-mail"})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string;
    @ApiProperty({example: "12345678", description: "Password"})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4х и не больше 16ти'})
    readonly password: string;
}