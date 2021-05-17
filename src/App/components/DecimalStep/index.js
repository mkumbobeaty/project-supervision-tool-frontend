import React from 'react';
import { Slider, InputNumber } from 'antd';


class DecimalStep extends React.Component {
    state = {
        inputValue: 1,
    };

    onChange = value => {

        if (isNaN(value)) {
            return;
        }
        this.props.onStepChange(value);
        this.setState({
            inputValue: value,
        });
    };

    render() {
        const { inputValue } = this.state;
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div><b>Transparency:</b></div>
                <div style={{display: 'flex'}}>
                    <Slider
                        style={{width: '100%'}}
                        reverse={true}
                        disabled={this.props.disabled}
                        min={0}
                        max={1}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                        step={0.1}
                    />
                    <InputNumber
                        style={{margin: '0 0 0 16px'}}
                        min={0}
                        max={1}
                        step={0.1}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </div>
            </div>

        );
    }
}

export default DecimalStep;
