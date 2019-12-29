import React, {Component} from 'react';
import flatpickr from 'flatpickr';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {func, string} from 'prop-types';

export default class Datepicker extends Component {
  static propTypes = {
    onChange: func,
    onSubmit: func,
    defaultDate: string
  }

  static defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    defaultDate: null
  }

  state = {
    showClear: false
  }

  datePicker = React.createRef();
  calendar = null;

  componentDidMount() {
    const {defaultDate} = this.props;

    this.calendar = flatpickr(this.datePicker.current, {
      wrap: true,
      minDate: new Date(),
      defaultDate: new Date(defaultDate),
      dateFormat: 'F j, Y',
      onChange: this.onChange
    });

    if (defaultDate) {
      this.setState({
        showClear: !this.calendar.isMobile
      });
    }
  }

  onChange = (selectedDates, dateString, instance) => {
    this.setState({
      showClear: selectedDates.length > 0 && !instance.isMobile
    });
    this.props.onChange(selectedDates.length > 0 ? selectedDates[0].toString() : null);
  }

  onSubmit = event => {
    if (event.key === 'Enter') {
      this.props.onSubmit(event);
    }
  }

  clear = () => {
    this.calendar.clear();
    this.calendar.close();
  }

  render() {
    const {showClear} = this.state;
    const inputClass = 'form-control ' + (showClear ? 'input-small' : '');
    const clearClass = 'btn ' + (!showClear && 'd-none');

    return (
      <div ref={this.datePicker}>
        <input data-input className={inputClass} placeholder="schedule date" onKeyPress={this.onSubmit}/>
        <button data-clear type="button" className={clearClass} title="clear schedule date"><FontAwesomeIcon icon={faTimes}/></button>

        <style jsx>{`
        input { display: inline-block; }
        .input-small { width: calc(100% - 40px); }
        .form-control[readonly] { background-color: #fff; }
        `}
        </style>
      </div>
    );
  }
}
