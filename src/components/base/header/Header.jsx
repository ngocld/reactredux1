import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {
    
    render() {
        return (
            <div>
                <div>
                    <div className="jumbotron text-center">
                        <h1 className="display-3">HỆ THỐNG NHÂN SỰ</h1>
                        <p className="lead">{this.props.titleName}</p>
                    </div>

                </div>;

            </div>
        );
    }
}

Header.defaultProps = {
    titleName: 'Buoc dau rat cham chap'
}

export default Header;