import * as React from 'react'
import { useDuck } from 'observable-duck'
import AppDuck from './AppDuck'
import RegisteredRouter from '@src/routes/RegisteredRouter'
import AppMenu from './components/layout/Menu'
import { Layout, Flex } from 'antd'
import './app.css'
import logger from './plugin/logger'

const { Header, Footer, Content } = Layout

export default function App() {
  const { duck, store, dispatch } = useDuck(AppDuck, { middlewares: [logger] })
  return (
    <Flex justify='center'>
      <Layout className='app-layout'>
        <Header className='app-header'>
          <AppMenu />
        </Header>
        <Content className='app-content'>
          <RegisteredRouter />
        </Content>
        <Footer className='app-footer'>Footer timestamp {store.stamp}</Footer>
      </Layout>
    </Flex>
  )
}
