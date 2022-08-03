import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, } from 'antd';
import { UserSwitchOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router';
import { Select } from 'antd';
import { TOKEN, TYPE_USER, USER_LOGIN } from '../../util/settings/config';

const { Option } = Select;


export default function AdminHeader() {
    const username = localStorage.getItem(USER_LOGIN) ? JSON.parse(localStorage.getItem(USER_LOGIN)).taiKhoan : '';
    const handleChange = (value) => {
        if (value == 'logout') {
    
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TYPE_USER);
            localStorage.removeItem(TOKEN);
            window.location.reload();
    
        }
    }
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/" />
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light navAdmin">
            <h2 className="ml-5 text-5xl text-center">Quản lý rạp chiếu phim</h2>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId navAdminItem">
                <ul className="navbar-nav text-right mt-lg-0 mr-10 position-absolute top-30 end-0">
                    <li className="user">
                        <Avatar size="large" style={{ color: '#F5F5F5', backgroundColor: '#000000', marginRight: "10px" }} icon={<UserSwitchOutlined />} />
                        <Select value={username} aria-label="Default select example" style={{ width: 120 }} onChange={handleChange} >
                            <Option value="logout" >Logout</Option>
                        </Select>
                    </li>
                </ul>
            </div>
        </nav>
    )


}