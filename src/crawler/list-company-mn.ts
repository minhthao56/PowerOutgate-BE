import CheerioParse from "@src/internals/cheerioParse";
import { CompanyBase } from "@src/schema/company-base";

const html = `
<select id="idCongTyDienLuc" onchange="CongTyDienLuc_DienLuc(this);" class="form-select">
        <option value="PB01">Công ty Điện lực Bình Phước</option>
        <option value="PB02">Công ty Điện lực Bình Thuận</option>
        <option value="PB03">Công ty Điện lực Lâm Đồng</option>
        <option value="PB04">Công ty Điện lực Bình Dương</option>
        <option value="PB05">Công ty Điện lực Tây Ninh</option>
        <option value="PB06">Công ty Điện lực Long An</option>
        <option value="PB07">Công ty Điện lực Đồng Tháp</option>
        <option value="PB08">Công ty Điện lực Tiền Giang</option>
        <option value="PB09">Công ty Điện lực Bến Tre</option>
        <option value="PB10">Công ty Điện lực Vĩnh Long</option>
        <option value="PB11">Công ty Điện lực Cần Thơ</option>
        <option value="PB12">Công ty Điện lực An Giang</option>
        <option value="PB13">Công ty Điện lực Kiên Giang</option>
        <option value="PB14">Công ty Điện lực Cà Mau</option>
        <option value="PB15">Công ty Điện lực Bà Rịa - Vũng Tàu</option>
        <option value="PB16">Công ty Điện lực Trà Vinh</option>
        <option value="PB17">Công ty Điện lực Sóc Trăng</option>
        <option value="PB18">Công ty Điện lực Ninh Thuận</option>
        <option value="PB19">Công ty Điện lực Bạc Liêu</option>
        <option value="PB20">Công ty Điện lực Hậu Giang</option>
        <option value="PK">Công ty TNHH MTV Điện lực Đồng Nai</option>
</select>`;

const cheerioParse = new CheerioParse(html);

const selector = cheerioParse.loadHTML();

const companiesMN: CompanyBase[] = [];

selector("option").each((_, e) => {
    const code = selector(e).attr("value");
    const name = selector(e).text();
    if (code) {
        const company = new CompanyBase();
        company.code = code;
        company.name = name;
        company.region = "MN";
        companiesMN.push(company);
    }
});

export default companiesMN;
