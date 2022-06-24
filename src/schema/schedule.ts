import { IsString } from "class-validator";

export class Schedule {
    @IsString()
    title: string;

    @IsString()
    text: string;

    @IsString()
    rating: number;

    @IsString()
    email: string;

    @IsString()
    site: string;

    @IsString()
    createDate: Date;
}
