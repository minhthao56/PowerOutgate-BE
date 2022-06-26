import { getOrganizationCode } from "@src/database/queries/organization.queries";
import axiosClientMN from "@src/internals/axios-client/axiosClientMN";

interface GetScheduleProps {
    madvi: string;
    tuNgay: string;
    denNgay: string;
}
export async function getSchedule(props: GetScheduleProps) {
    try {
        await axiosClientMN.get("TraCuu/GetThongTinLichNgungGiamMaKhachHang", {
            params: { ...props, ...{ ChucNang: "MaDonVi" } },
        });
    } catch (error) {
        console.log(error);
    }
}

export async function getSchedules() {
    try {
        await getSchedule({
            madvi: "PB0101",
            tuNgay: "26-06-2022",
            denNgay: "03-07-2022",
        });
    } catch (error) {
        console.log({ error });
    }

    // try {
    //     const codes = await getOrganizationCode();
    //     if (codes?.rows) {
    //         for (const orgCode of codes?.rows) {
    //             await getSchedule({
    //                 madvi: orgCode.code,
    //                 tuNgay: "26-06-2022",
    //                 denNgay: "03-07-2022",
    //             });
    //         }
    //     }
    // } catch (error) {
    //     console.log({ error });
    // }
}
