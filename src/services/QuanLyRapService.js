import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyRapService  extends baseService{

    constructor() {
        super();
    }

    layDanhSachHeThongRap = (maHeThongRap) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}?maNhom=${GROUPID}`);
    }

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    }
    // layThongTinLichChieuPhim = (tenRap='') => {
    //     if(tenRap.trim()!=''){
    //         return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?tenRap=${tenRap}`)
    //     }
    //     return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?tenRap=${tenRap}`)

    // }
    
    layThongTinHeThongRap = (tenHeThongRap='') => {
            if(tenHeThongRap.trim()!=''){
                return this.get(`/api/QuanLyRap/LayThongTinHeThongRap?tenHeThongRap=${tenHeThongRap}`)
            }
            return this.get(`/api/QuanLyRap/LayThongTinHeThongRap?tenHeThongRap=${tenHeThongRap}`)
    
        }
        // return this.get(`/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${maHeThongRap}`);
    

    layThongTinCumRap = (maHeThongRap) => {
        return this.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
    }
}



export const quanLyRapService = new QuanLyRapService();
