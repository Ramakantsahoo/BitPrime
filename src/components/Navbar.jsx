import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined ,AlertOutlined} from '@ant-design/icons'
import icon from '../Images/crypto.png'
import { Checkbox, ConfigProvider } from 'antd';
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize)

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 768)
            setActiveMenu(false);
        else
            setActiveMenu(true);
    }, [screenSize])

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        colorPrimary: 'black',
                    },
                },
            }}
        >
            <div className='nav-container'>
                <div className='logo-container'>
                    {/* <Avatar style={{width:'100px'}} /> */}
                    <Typography.Title level={2} className='logo' style={{ fontWeight: 'bold' }}>
                        <Link to='/' style={{ color: 'black',fontStyle:'italic' ,fontSize:'37px'}}>BitPrime</Link>
                    </Typography.Title>

                    <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                        <MenuOutlined />
                    </Button>
                </div>

                {activeMenu && (
                    <Menu style={{ backgroundColor: '#fcd535', fontWeight: 'bold' }}>
                        <Menu.Item icon={<HomeOutlined />}>
                            <Link to='/'>Home</Link>
                        </Menu.Item>
                        <Menu.Item icon={<FundOutlined />}>
                            <Link to='/cryptocurrencies'>CryptoCurrencies</Link>
                        </Menu.Item>
                        <Menu.Item icon={<AlertOutlined />}>
                            <Link to='/news'>News</Link>
                        </Menu.Item>
                        <Menu.Item icon={<BulbOutlined />}>
                            <Link to='/about'>About</Link>
                        </Menu.Item>
                    </Menu>
                )}

            </div>
        </ConfigProvider>
    )
}

export default Navbar
