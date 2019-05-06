import React, { Component } from 'react';
import { Button } from 'antd';
class AntdButton extends Component {
    render() {
        return (
            <div>
                <div>
                    <Button type="primary" size="large" icon="search">search</Button>
                </div>
            </div>
        )
    }
}

export default AntdButton;