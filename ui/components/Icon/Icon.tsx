import * as React from 'react'
import classNames from 'classnames';

import './icon.less'
import '../../assets/font/iconfont.css'

interface Style {
    height?: number,
    width?: number,
    fontSize?: number
    [propName: string]: any;
}

export interface IconProps {
    type: string;
    spin?: boolean;
    style?: Style;
    className?: string
};

function Icon({ type, spin, style = {}, className } : IconProps) {
    const {
        height = 24,
        width = 24,
        fontSize = 24,
        ...otherStyle
    } = style
    const classname = classNames(['component-icon iconfont', `icon-${type}`, className, { 'icon-spin': spin }])
    return (
        <i
            className={classname}
            style={{
                width,
                height,
                fontSize,
                lineHeight: height + 'px',
                ...otherStyle
            }}
        />
    )
}

export default Icon