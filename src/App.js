import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/home';
import { Content, Footer } from 'antd/lib/layout/layout';
import { Layout } from 'antd';
import Title from 'antd/lib/skeleton/Title';

const { Header, Footer, Sider, Content } = Layout;

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <div className='app'>
            <Layout>
            <Header><title style={{color:'white'}} level={3}>BurgerShack</title></Header>
            <Layout>
            <Sider style={{background:'green'}}>sider</Sider>
            <Layout>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </Layout>
            </Layout>
        </div>
    )
}

export default App;