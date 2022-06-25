import { Schedule } from "@src/schema/schedule-base";
import * as cheerio from "cheerio";

class CheerioParse {
    private html: string;

    constructor(html: string) {
        this.html = html;
    }

    loadHTML() {
        return cheerio.load(this.html);
    }
    parseTableToJSON(): Schedule[] {
        const selector = this.loadHTML();
        const tbody = selector("tbody");

        const listSchedule: Schedule[] = [];

        tbody.find("tr").each((_, e) => {
            const schedule = new Schedule();
            listSchedule.push(schedule);

            selector(e)
                .find("td")
                .each((index, item) => {
                    const text = selector(item).text();

                    switch (index) {
                        case 0:
                            schedule.organization = text;
                            break;
                        case 1:
                            schedule.date = text;
                            break;
                        case 2:
                            schedule.from_time = text;
                            break;
                        case 3:
                            schedule.from_time = text;
                            break;
                        case 4:
                            schedule.area = text;
                            break;
                        case 5:
                            schedule.reason = text;
                            break;
                    }
                });
        });
        return listSchedule;
    }
    parseSelectToJSON() {}
}

export default CheerioParse;
