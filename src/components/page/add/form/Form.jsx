import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="form-group col-6 mx-auto">
                            <label>Mã nhân viên</label>
                            <input type="empcode" className="form-control" />
                        </div>
                        <div className="form-group col-6 mx-auto">
                            <label>Tên nhân viên</label>
                            <input type="empname" className="form-control" />
                        </div>
                        <div className="form-group col-6 mx-auto">
                            <label>Công ty</label>
                            <select className="form-control" name="company">
                                <option value={1}>SSC</option>
                                <option value={2}>eGov</option>
                                <option value={3}>eHealth</option>
                            </select>
                        </div>
                        <div className="col-6 mx-auto">
                            <button type="submit"
                                className="btn btn-primary btn-block"
                            >
                                THÊM MỚI
                        </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Form;