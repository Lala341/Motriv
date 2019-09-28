import React, { Component } from 'react';

class sede extends Component {
    state={
        value: this.props.value
    }
    render() {
        return (
            <div>
                <ul>
									<li className="d-flex flex-row align-items-start justify-content-start">
										<div className="sidebar_info_icon"><img src="https://cdn.icon-icons.com/icons2/1244/PNG/512/1492790962-53location_84191.png" alt="" width="30" height="30"></img></div>
										<div className="sidebar_info_content"><span>Address: </span>{this.state.value.split("//")[0]}</div>
									</li>
                                    <br></br>
									<li className="d-flex flex-row align-items-start justify-content-start">
										<div className="sidebar_info_icon"><img src="https://www.stickpng.com/assets/images/5a4525cd546ddca7e1fcbc84.png" alt=""  width="30" height="30"></img></div>
										<div className="sidebar_info_content"><span>Phone: </span>{this.state.value.split("//")[1]}</div>
									</li>
                                    <br></br>
									
								</ul>
            </div>
        );
    }
}

export default sede;