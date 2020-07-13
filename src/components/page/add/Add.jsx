import React, { Component } from 'react';
import Menu from '../../base/menu/Menu';
import Header from '../../base/header/Header';
import Form from './form/Form';

class Add extends Component {
    render() {
        return (
            <>
                <Menu></Menu>
                <Header titleName="Thêm mới nhân viên vào hệ thống"></Header>
                <Form></Form>

            </>
        );
    }
}

export default Add;