import React, { useState } from 'react';
import { Layout, Menu, theme, Divider } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
HomeOutlined,
ProjectOutlined,
LineChartOutlined,
TwitterOutlined,
YoutubeOutlined,
GithubOutlined,
DiscordOutlined,
CoffeeOutlined,
SettingOutlined,
BookOutlined,
InstagramOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import '../css/SideBar.css'
import getTheme from '../functions/getTheme';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const Sidebar = (props) => {
  
  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState(location.pathname);
  const theme1 = window.localStorage.getItem("theme")
  const [isDark, setIsDark] = useState(getTheme)

  const handleClick = (e) => {

    if (e.key === 'twitter' || e.key === "youtube" || e.key === "github" || e.key === "discord" || e.key === "coffee" || e.key === "blog" || e.key === "instagram") {
     return;
    } else {
      setSelectedKeys([e.key]);
    }
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = React.useState(window.matchMedia('(max-width: 576px)').matches);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 576px)');

    const handleMediaQueryChange = (event) => {
      setCollapsed(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  const getCollapsedMarginLeft = () => {
    const screenWidth = window.innerWidth;
    const defaultMarginLeft = 200; 
    const collapsedMarginLeft = 80;
    const breakpoint = 576; 


    return screenWidth <= breakpoint ? 0 : collapsed ? collapsedMarginLeft : defaultMarginLeft;
  };


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        position: 'fixed',
        left: 0,
        zIndex: 1,
        height: '100vh',}}
        theme='light'
        
      >
   
        <Menu theme="light" mode="inline" defaultSelectedKeys={[location.pathname]}  selectedKeys={selectedKeys} onClick={handleClick}>
        <div className="demo-logo-vertical" />
    
          <Menu.Item key="/" icon={<HomeOutlined />}>
           <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/projects" icon={<ProjectOutlined />}>
           <Link to="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="/activity" icon={<LineChartOutlined />}>
           <Link to="/activity">Activity</Link>
          </Menu.Item>
          <Menu.Item key={"blog"} icon={<BookOutlined />}>
            <a href='https://blog-shaheerahamed.vercel.app/' target='_blank'>Blog</a>
          </Menu.Item>
          <Divider orientation='left' plain>Socials</Divider>
          <Menu.Item key="twitter" icon={<TwitterOutlined />}>
<a href='https://twitter.com/ashaheerdev' target='_blank' rel='noreferrer'>Twitter</a>
          </Menu.Item>
          <Menu.Item key="instagram" icon={<InstagramOutlined/>}>
<a href='https://instagram.com/ahamedboi' target='_blank' rel='noreferrer'>Instagram</a>
          </Menu.Item>
          <Menu.Item key="youtube" icon={<YoutubeOutlined />}>
<a href='https://www.youtube.com/@shaheerDev' target='_blank' rel='noreferrer'>YouTube</a>
          </Menu.Item>
          <Menu.Item key="github" icon={<GithubOutlined />}>
<a href='https://github.com/spicybirsge' target='_blank' rel='noreferrer'>GitHub</a>
          </Menu.Item>
          <Menu.Item key="discord" icon={<DiscordOutlined />}>
<a href='https://discord.com/users/818903544723406858' target='_blank' rel='noreferrer'>Discord</a>
          </Menu.Item>
          <Menu.Item key="coffee" icon={<CoffeeOutlined />}>
<a href='https://buymeacoffee.com/shaheerahamed' target='_blank' rel='noreferrer'>Support Me</a>
          </Menu.Item>
          <Divider orientation='left' plain>Options</Divider>
          <Menu.Item key={"/settings"} icon={<SettingOutlined/>}>
            <Link to={"/settings"}>Settings</Link>
          </Menu.Item>
        </Menu>
        <div className="collapse-button" onClick={toggle} style={{
             background: isDark ? "#141414" : "#ffffff"  ,
             color: isDark ? "#ffffff" : "#001529"
        }}>
         
        </div>
      </Sider>
     
      <Layout className="site-layout" style={{ marginLeft: getCollapsedMarginLeft(), "marginRight": "0%" }}>
       
    
      <Content
              className="site-layout-background"
              style={{
               
                padding: 24,
                minHeight: 280,
                marginLeft: '64px', 
                marginRight: "0px"
              }}
            >
      
       {props.element}
       
          </Content>
          </Layout>

    </Layout>
  );
};

export default Sidebar;