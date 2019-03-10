import * as React from 'react'
import {Component} from "react";
import classNames from "classnames"

import Icon from '../Icon'

import './Button.less'

export enum ButtonSize {
    LARGE =  'large',
    DEFAULT = 'default',
    SMALL = 'small'
}

export enum ButtonType {
    PRIMARY = 'primary',
    DEFAULT = 'default',
    DANGER = 'danger'
}

export interface ButtonProps {
    type: string,
    disabled? : boolean,
    icon? : string,
    size? : string,
    block? : boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

class Button extends Component<ButtonProps> {

    _onClick = (e: any) => {
        if(this.props.onClick){
            this.props.onClick(e);
        }
    }

    render () {
        const { type, size, block, icon, children, disabled } = this.props
        const className = classNames(['btn'], {
            'btn-lg': size === ButtonSize.LARGE,
            'btn-sm': size === ButtonSize.SMALL,
            'btn-primary': type === ButtonType.PRIMARY,
            'btn-danger': type === ButtonType.DANGER,
            'btn-block': block === true,
            'btn-disabled': disabled === true
        })
        return (
            <button className={className} onClick={this._onClick} disabled={disabled}>
                {icon && <Icon type={icon} className='btn-icon' />}
                {children && <span>{children}</span>}
            </button>
        )
    }
}

export default Button