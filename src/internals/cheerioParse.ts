import * as cheerio from "cheerio";

class CheerioParse {
    private html: string;

    constructor(html: string) {
        this.html = html;
    }

    loadHTML() {
        return cheerio.load(this.html);
    }
    parseTableToJSON() {
        const selector = this.loadHTML();
        const tbody = selector("tbody");
        tbody.find("tr").each((_, e) => {
            selector(e)
                .find("td")
                .each((_, item) => {
                    console.log({ item: selector(item).text() });
                });
        });
    }
}

export default CheerioParse;
