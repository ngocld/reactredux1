import React, { Component } from 'react';

class Grid extends Component {

    render() {
        const fieldRender = (
            <tr>
                <th>No.</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Công ty</th>
                <th>Thao tác</th>
            </tr>
        )

        const dataRender = this.props.data.map((item, key) => {
            return (
                <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-outline-primary mr-2"
                            data-toggle="modal"
                            data-target="#modelId"
                        >
                            <i className="fas fa-pen" />
                        </button>

                        <button type="button" className="btn btn-outline-primary">
                            <i className="fas fa-times" />
                        </button>
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <div className="container">
                    <table className="table">
                        <thead>
                            {fieldRender}
                        </thead>
                        <tbody>
                            {dataRender}
                        </tbody>
                    </table>
                </div>;
            </div>
        );
    }
}

export default Grid;