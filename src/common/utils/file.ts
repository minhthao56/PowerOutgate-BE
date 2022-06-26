import fs from "fs";
export const readSQLFile = (path: string): string => {
    const sql = fs.readFileSync(`${path}.sql`).toString();
    return sql;
};
