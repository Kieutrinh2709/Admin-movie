import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';

import { EditOutlined, SearchOutlined, DeleteOutlined,CalendarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import { layThongTinHeThongRapAction } from '../../../redux/actions/QuanLyRapActions';

export default function Theater() {

    const { danhSachRapDefault } = useSelector(state => state.QuanLyRapReducer);

    const dispatch = useDispatch();

    console.log('danhSachRapDefault ', danhSachRapDefault );

    useEffect(() => {
        dispatch(layThongTinHeThongRapAction());

    }, [])



    const columns = [
        {
            title: 'Mã hệ thống',
            dataIndex: 'maHeThongRap',
            sorter: (a, b) => a.maHeThongRap - b.maHeThongRap,
            sortDirections: ['descend', 'ascend'],
            width: '15%'

            // sortOrder:'descend'
        },
        {
            title: 'Tên hệ thống rạp',
            dataIndex: 'tenHeThongRap',
            sorter: (a, b) => {
                let tenHeThongRapA = a.tenHeThongRap.toLowerCase().trim();
                let tenHeThongRapB = b.tenHeThongRap.toLowerCase().trim();
                if (tenHeThongRapA > tenHeThongRapB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '20%'
        },
        {
            title: 'Bí danh',
            dataIndex: 'biDanh',
            sorter: (a, b) => {
                let biDanhA = a.biDanh.toLowerCase().trim();
                let biDanhB = b.biDanh.toLowerCase().trim();
                if (biDanhA > biDanhB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '20%'
        },
        {
            title: 'Logo',
            dataIndex: 'logo',
            render: (text, theater, index) => {
                return <Fragment>
                    <img src={theater.logo} alt={theater.tenHeThongRap} width={50} height={50} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50` }} />
                </Fragment>
            },
            width: '25%'
            // sorter: (a, b) => a.age - b.age,
        },
        // {
        //     title: 'Hành động',
        //     dataIndex: 'maHeThongRap',
        //     render: (text, theater) => {
        //         return <Fragment>
        //             <NavLink className=" mr-2  text-base" to={`/admin/list-theater/${row.maHeThongRap}`}>
        //             </NavLink>
        //         </Fragment>
        //     },
        //     sortDirections: ['descend', 'ascend'],
        //     width: '20%'
        // },
    ];
    const data = danhSachRapDefault;



    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div>
            <h3 className="text-4xl">Quản lý Rạp</h3>

            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"tenHeThongRap"} />
        </div>
    )
}
