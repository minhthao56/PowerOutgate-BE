import { IsString } from "class-validator";

export class ScheduleBase {
    @IsString()
    date: string;

    @IsString()
    fromTime: string;

    @IsString()
    toTime: string;

    @IsString()
    area: string;

    @IsString()
    reason: string;
}

export class Schedule extends ScheduleBase {
    @IsString()
    organization: string;
}
