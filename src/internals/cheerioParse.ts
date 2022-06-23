import * as cheerio from "cheerio";

class CheerioParse {
    private html: string;

    constructor(html: string) {
        this.html = html;
    }

    loadHTML() {
        return cheerio.load(this.html);
    }
    parseTable() {
        const selector = this.loadHTML();
        const result = selector("table");
        return result;
    }
}

export default CheerioParse;
