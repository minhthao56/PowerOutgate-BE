import { IsString, Equals, IsNotEmpty } from "class-validator";

export class CompanyBase {
    @IsString()
    code: string;

    @IsString()
    name: string;

    @Equals("MN" || "MB" || "MT" || "HCM" || "HN")
    @IsNotEmpty()
    region: "MN" | "MB" | "MT" | "HCM" | "HN";
}
