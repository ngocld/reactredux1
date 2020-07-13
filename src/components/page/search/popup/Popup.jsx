import React, { Component } from 'react';

class Popup extends Component {
    render() {
        return (
            <div>
                {/* Popup  */}
                <div
                    className="modal fade"
                    id="modelId"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="modelTitleId"
                    aria-hidden="true"
                >

                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">CẬP NHẬT THÔNG TIN</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">
                                            Mã nhân viên
                                        </label>
                                        <input type="text" className="form-control" id="recipient-name" disabled />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">
                                            Tên nhân viên
                                        </label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>

                                    <div className="form-group">
                                        <label>Công ty</label>
                                        <select className="form-control" name="company">
                                            <option value="1">SSC</option>
                                            <option value="2">eGov</option>
                                            <option value="3">eHealth</option>
                                        </select>
                                    </div>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>;

            </div>
        );
    }
}

export default Popup;