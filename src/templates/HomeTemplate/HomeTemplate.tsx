import React from 'react'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import { Outlet } from 'react-router-dom'
import FooterHome from '../../components/FooterHome/FooterHome'
import {ShoppingCartOutlined} from '@ant-design/icons'

type Props = {}

const HomeTemplate = (props: Props) => {
  return (
    <>
        <HeaderHome logo={<ShoppingCartOutlined style={{fontSize:100}}/>} />

        <div className="content" style={{minHeight: '75vh'}}>
            <Outlet />
        </div>

        <FooterHome />
    
    </>
  )
}

export default HomeTemplate