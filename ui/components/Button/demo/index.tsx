import * as React from 'react'
import Button, { ButtonType, ButtonSize } from "../index"

import './index.less'

class IconDemo extends React.Component {
    render () {
        return (
            <div className="button-demo">
                <div className="button-layout">普通按钮:</div>
                <div className="button-layout">
                    <span className="button-cell">
                        <Button type={ButtonType.DEFAULT} size={ButtonSize.SMALL}>Default</Button>
                    </span>
                    <span className="button-cell">
                        <Button type={ButtonType.PRIMARY} size={ButtonSize.SMALL}>Primary</Button>
                    </span>
                    <span className="button-cell">
                        <Button type={ButtonType.DANGER} size={ButtonSize.SMALL}>Danger</Button>
                    </span>
                </div>
                <div className="button-layout">
                    <span className="button-cell">
                        <Button type={ButtonType.DEFAULT}>Default</Button>
                    </span>
                    <span className="button-cell">
                        <Button type={ButtonType.PRIMARY}>Primary</Button>
                    </span>
                    <span className="button-cell">
                        <Button type={ButtonType.DANGER}>Danger</Button>
                    </span>
                </div>
                <div className="button-layout">
                    <span className="button-cell">
                        <Button type={ButtonType.DEFAULT} size={ButtonSize.LARGE}>Default</Button>
                    </span>
                    <span className="button-cell">
                        <Button type={ButtonType.PRIMARY} size={ButtonSize.LARGE}>Primary</Button>
                    </span>
                    <span className="button-cell">
                        <Button type={ButtonType.DANGER} size={ButtonSize.LARGE}>Danger</Button>
                    </span>
                </div>
                <div className="button-layout">不可用按钮:</div>
                <div className="button-layout">
                    <span className="button-cell">
                        <Button type={ButtonType.DEFAULT} disabled={true}>Default</Button>
                    </span>
                    <span className="button-cell">
                        <Button type={ButtonType.PRIMARY} disabled={true}>Primary</Button>
                    </span>
                    <span className="button-cell">
                        <Button type={ButtonType.DANGER} disabled={true}>Danger</Button>
                    </span>
                </div>
                <div className="button-layout">block按钮:</div>
                <div className="button-layout">
                    <div className="button-layout">
                        <Button type={ButtonType.PRIMARY} block={true}>Primary</Button>
                    </div>
                    <div className="button-layout">
                        <Button type={ButtonType.DEFAULT} block={true}>Default</Button>
                    </div>
                    <div className="button-layout">
                        <Button type={ButtonType.DANGER} block={true}>Danger</Button>
                    </div>
                </div>
                <div className="button-layout">图标按钮:</div>
                <div className="button-layout">
                    <div className="button-layout">
                        <Button type={ButtonType.PRIMARY} icon={'contact'}>Primary</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default IconDemo
