import { SET_CUM_RAP_THEO_HE_THONG, SET_HE_THONG_RAP_CHIEU, SET_LICH_CHIEU_PHIM, SET_THONG_TIN_HE_THONG_RAP } from "../actions/types/QuanLyRapType";

const stateDefault = {
    heThongRapChieu: [],
    danhSachLichChieuPhim: [],
    danhSachLichChieuPhimDefault: [],
    danhSachRap:[
        {
            "maHeThongRap": "Galaxy",
            "tenHeThongRap": "Galaxy Cinema",
            "biDanh": "galaxy-cinema",
            "logo": "https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png"
        },
        {
            "maHeThongRap": "Galaxy",
            "tenHeThongRap": "Galaxy Cinema",
            "biDanh": "galaxy-cinema",
            "logo": "https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png"
        },
    ],
    danhSachRapDefault:[],

}



export const QuanLyRapReducer = (state=stateDefault,action) =>{

    switch (action.type) {
      
        case SET_HE_THONG_RAP_CHIEU : {
            state.heThongRapChieu = action.heThongRapChieu;
            return {...state};
        }
        case SET_CUM_RAP_THEO_HE_THONG:{
            state.cumRapTheoHeThong = action.cumRapTheoHeThong;
            return {...state};
        }
        case SET_LICH_CHIEU_PHIM:{
            // let arrayLichChieuPhim = [...state.danhSachLichChieuPhim, action.danhSachLichChieuPhim];
            // state.danhSachLichChieuPhim = arrayLichChieuPhim;
            state.danhSachLichChieuPhim = action.danhSachLichChieuPhim;
            state.danhSachLichChieuPhimDefault = state.danhSachLichChieuPhim;
            return{...state};
        }
        case SET_THONG_TIN_HE_THONG_RAP:{
            // state.danhSachRap = {tenRap:action.tenRap,logoRap:action.logoRap}
            // return {...state};
            state.danhSachRap = action.danhSachRap;
            state.danhSachRapDefault = state.danhSachRap;
            return {...state}

        }

        default: return {...state}
            break;
    }
}
