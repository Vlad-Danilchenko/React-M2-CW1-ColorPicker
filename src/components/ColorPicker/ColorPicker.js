import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activOptionIdx: 0,
  };
  setActivIdx = index => {
    this.setState({ activOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activOptionIdx } = this.state;
    const { options } = this.props;

    const { label, color } = options[activOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>
          Ви вибрали колір: '{label}' hex: {color}
        </p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => {
                this.setActivIdx(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
