import React, { useState } from "react";
// import { GoogleLogout, GoogleLogin } from "react-google-login";
import image from "../src/image/student-11184.png";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Home from "./Home/Home";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Faculty from "./Faculty/Faculty";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Login = ({ component }) => {
  // const clientId = "277460124013-h811ttreohu77kiqupk1eoe5mjq2h33v.apps.googleusercontent.com";
  const [collapsed, setcollapsed] = useState(false);
  const [key, setkey] = useState("1");

  const onCollapse = () => {
    setcollapsed(!collapsed);
  };

  return (
    <div>
      {/* <Layout>
        <Sider width={300} trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" >
          <img src={image} alt="kjhg" width={100} height={150} />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[key]}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={()=>setkey("1")} >
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={()=>setkey("2")}>
              Students List
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />} onClick={()=>setkey("3")}>
             Add Student
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick:toggle,
            })}
            
          </Header>
          <Content
            className="site-layout-screen"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: "100vh",
            }}
          >
            {/* <Home/> */}
      {/* {key==="1" && <Home/>} */}
      {/* </Content>
        </Layout>
      </Layout> */}
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo">
            <img src={image} alt="kjhg" width={70} height={100} />
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>

              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/Faculty">Faculty</Link>
              </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="Streams">
              <Menu.Item key="3">Computer Science </Menu.Item>
              <Menu.Item key="4">Machenical</Menu.Item>
              <Menu.Item key="5">Electrical</Menu.Item>
              <Menu.Item key="5">Civil</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Deans">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              staff
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 " }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            >
              {component}
            </div>
            {/* <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Faculty" element={<Faculty />} />
              </Routes>
            </BrowserRouter> */}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Login;
