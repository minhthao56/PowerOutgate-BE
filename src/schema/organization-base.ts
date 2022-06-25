import { IsString } from "class-validator";

export class OrganizationBase {
    @IsString()
    code: string;

    @IsString()
    name: string;
}

export class Organization extends OrganizationBase {
    @IsString()
    company_code: string;
}
