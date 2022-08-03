import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { TYPE_USER, USER_LOGIN } from "../../util/settings/config";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    UserOutlined,
    ScheduleOutlined,
    HomeOutlined,
    HddOutlined,
    InsertRowBelowOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



const AdminTemplate = (props) => { //path, exact, Component

    const { Component, ...restProps } = props;
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const [collapsed, setCollapsed] = useState(false);
    const getPath = props.location.pathname;
    const path = getPath.split("/");
    const defaultKey = (path) => {
        let key = "1";
        if (path === 'films') {
            key = "10";
        }
        if (path === 'showtimes' ) {
            key = "13";
        }
        if (path === 'list-theater') {
            key = "14";
        }

        return key;
    }
    const getLink = (path, index) => {
        let result = '';
        for (let i = 0; i < index; i++) {
            result += `/${path[i]} `;
        }
        console.log(result);
        return result;
    }
    const renderPath = () => {
        let arrR = [];
        for (let i = 0; i < path.length; i++) {
            let data = <Breadcrumb.Item><NavLink to={`/${path[i - 1]}/${path[i]}`}>{path[i]}</NavLink></Breadcrumb.Item>
            arrR.push(data);
        }
        return arrR;
    }

    const onCollapse = collapsed => {
        // console.log(collapsed);
        setCollapsed(collapsed);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

    })

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Redirect to='/' />
    }

    if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Redirect to='/' />

    }


    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match
        return  <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo p-5">
                        <img src="https://image.shutterstock.com/image-vector/creative-movie-logo-design-template-600w-723352594.jpg" alt="..." />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={[defaultKey(path[2])]} mode="inline" style={{ height: '200px' }}>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Quản lý users">
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <NavLink to="/admin/users">Danh sách users</NavLink>             
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<DesktopOutlined />} title="Quản lý phim">
                            <Menu.Item key="10" icon={<DesktopOutlined />}>
                                <NavLink to="/admin/films">Danh sách phim</NavLink>             
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<ScheduleOutlined />} title="Quản lý lịch chiếu phim">
                            <Menu.Item key="13" icon={<ScheduleOutlined />}>
                                <NavLink to="/admin/showtimes">Tạo lịch chiếu phim</NavLink>             
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<HomeOutlined />} title="Quản lý hệ thống rạp">
                            <Menu.Item key="14" icon={<InsertRowBelowOutlined />}>
                                <NavLink to="/admin/list-theater">Danh sách cụm rạp</NavLink>             
                            </Menu.Item>
                        </SubMenu>                 
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <AdminHeader/>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                            {path.map((v, index) => {
                                return <Breadcrumb.Item><NavLink key={index} to={`/${v}`}>{v}</NavLink></Breadcrumb.Item>
                            })
                            }
                        </Breadcrumb>
                        <div className="bg-gray" style={{ padding: 24, minHeight: '85vh' }}>
                            <Component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />

}


export default AdminTemplate;