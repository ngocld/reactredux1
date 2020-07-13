import React, { Component } from 'react';
import './Search.scss'
import Menu from './../../base/menu/Menu'
import Header from '../../base/header/Header';
import data from '../../datasource/data.json'
import Grid from './grid/Grid';
import Popup from './popup/Popup';
import Find from './find/Find';


class Search extends Component {
    render() {
        return (
            <>
                {/* Top Menu */}
                <Menu></Menu>

                {/* Header  */}
                <Header titleName='Danh sách toàn hệ thống'></Header>

                {/* Tim kiem */}
                <Find></Find>

                {/* Grid data */}
                <Grid data={data}></Grid>

                {/* Popup  */}
                <Popup></Popup>
            </>
        );
    }
}

export default Search;