import React, { Component } from 'react';
import { Icon } from 'antd';
class AntdIcon extends Component {
    render() {
        return (
            <div>
                <Icon type="home" />
                <Icon type="setting" theme="filled" />
                <Icon type="smile" theme="outlined" />
                <Icon type="sync" spin />
                <Icon type="smile" rotate={180} />
                <Icon type="loading" />
            </div>
        )
    }
}

export default AntdIcon;