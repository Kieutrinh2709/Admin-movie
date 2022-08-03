import { quanLyRapService } from "../../services/QuanLyRapService"
import { SET_CHI_TIET_PHIM, SET_CUM_RAP_THEO_HE_THONG, SET_HE_THONG_RAP_CHIEU, SET_LICH_CHIEU_PHIM, SET_THONG_TIN_HE_THONG_RAP } from "./types/QuanLyRapType";



export const layDanhSachHeThongRapAction = (maHeThongRap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyRapService.layDanhSachHeThongRap(maHeThongRap);

            console.log('result', result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu: result.data.content
                })
            }


        } catch (errors) {
            console.log('errors', errors.response?.data)
        }

    }
}



// export const layThongTinChiTietPhimAction = (id) => {
//     return async dispatch => {
//         try{
//             const result = await quanLyRapService.layThongTinLichChieuPhim(id);

//             console.log('result',result);
//             //Lấy được dữ liệu từ api về  => reducer

//             dispatch({
//                 type:SET_CHI_TIET_PHIM,
//                 filmDetail: result.data.content
//             })


//         }
//         catch(errors) {
//             console.log('errors',errors.response?.data)

//         }
//     }




export const LayThongTinCumRapTheoHeThongAction = (maHeThongRap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyRapService.layThongTinCumRapTheoHeThong(maHeThongRap);
            console.log('result', result.data.content);
            if (result.status === 200) {
                dispatch({
                    type: SET_CUM_RAP_THEO_HE_THONG,
                    cumRapHeThong: result.data.content
                })
            }


        } catch (errors) {
            console.log('errors', errors.response?.data)
        }

    }

}


export const LayThongTinLichChieuPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await quanLyRapService.layThongTinLichChieuPhim(maPhim);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_LICH_CHIEU_PHIM,
                    danhSachLichChieuPhim: result.data.content,
                });

            }


            // console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const layThongTinHeThongRapAction = (tenHeThongRap='')=>{
    return async (dispatch) =>{
        try{
            const result = await quanLyRapService.layThongTinHeThongRap(tenHeThongRap);
            // console.log('maHethon',result.data);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_HE_THONG_RAP,
                    danhSachRap: result.data.content
                });

            }
        } catch(errors){
            console.log(errors);
        }
    }
}




