import { ScheduleBase } from "@src/schema/schedule-base";
import { IsString, IsNotEmpty } from "class-validator";

export class ScheduleTable extends ScheduleBase {
    @IsString()
    @IsNotEmpty()
    organization_id: string;

    @IsString()
    @IsNotEmpty()
    schedule_id: string;
}
