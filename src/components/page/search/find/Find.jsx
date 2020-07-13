import React, { Component } from 'react';

class Find extends Component {
    render() {
        return (
            <div>
                <div className="container mb-2">
                    <form className="form-inline">
                        <div className="form-group">
                            <input
                                type="text"
                                name="search"
                                className="form-control mr-2"
                                placeholder="Nhập từ khóa tìm kiếm"
                                aria-describedby="helpId"
                            />
                            <button type="submit" className="btn btn-primary">
                                Tìm kiếm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Find;