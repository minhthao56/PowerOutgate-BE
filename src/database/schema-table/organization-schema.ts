import { Organization } from "@src/schema/organization-base";
import { IsDateString, IsString } from "class-validator";

export class OrganizationTable extends Organization {
    @IsString()
    organization_id: string;

    @IsDateString()
    created_at: string;

    @IsDateString()
    update_at: string;

    @IsDateString()
    delete_at: string;
}
