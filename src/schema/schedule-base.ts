import { IsString } from "class-validator";

export class ScheduleBase {
    @IsString()
    date: string;

    @IsString()
    from_time: string;

    @IsString()
    to_time: string;

    @IsString()
    area: string;

    @IsString()
    reason: string;
}

export class Schedule extends ScheduleBase {
    @IsString()
    organization: string;
}
