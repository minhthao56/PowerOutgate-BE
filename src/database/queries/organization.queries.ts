import { readSQLFile } from "@src/common/utils/file";
import db, { QueryResultBase } from "@src/database";
import { OrganizationTable } from "@src/database/schema-table/organization-schema";

interface GetOrganizationCode extends Pick<OrganizationTable, "code"> {}

export async function getOrganizationCode(): Promise<
    QueryResultBase<GetOrganizationCode> | undefined
> {
    const sql = readSQLFile(__dirname + "/sql/organization-get-code");

    try {
        const result = await db.query<GetOrganizationCode>(sql);
        return {
            rowCount: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        console.log({ error });
    }
}
