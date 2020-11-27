import React, { Component } from "react";

import { Modal, Button } from 'antd';

export class AppWorks extends Component {

    state = { visible: false };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };
    
    render(){
    return(
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora </p>
                </div>
                <div className="contentHolder">
                    <Button onClick={this.showModal}>
                        <i className="fas fa-play"></i>
                    </Button>
                </div>
                <Modal
                    title="Mental Health Apps"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                <iframe title="Health App" width="100%" height="350" src="https://www.youtube.com/embed/27SzyKhaIPE"></iframe>
                </Modal>
            </div>
        </div>
    );
    }
}

export default AppWorks; 