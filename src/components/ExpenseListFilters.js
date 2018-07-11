import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  // onSortChange = (e) => {
  //   if (e.target.value === 'date') {
  //     this.props.sortByDate();
  //   } else if (e.target.value === 'amount') {
  //     this.props.sortByAmount();
  //   }
  // };
  onPriorityChange = (e) => {
    if (e.target.value === '') {
      this.props.setTextFilter(e.target.value);
    } if (e.target.value === 'date') {
      this.props.sortByDate();
    } if (e.target.value === 'p1') {
      this.props.setTextFilter(e.target.value);
    } if (e.target.value === 'p2') {
      this.props.setTextFilter(e.target.value);
    } if (e.target.value === 'p3') {
      this.props.setTextFilter(e.target.value);
    } if (e.target.value === 'Urgent') {
      this.props.setTextFilter(e.target.value);
    } if (e.target.value === 'Always') {
      this.props.setTextFilter(e.target.value);
    } if (e.target.value === 'Never') {
      this.props.setTextFilter(e.target.value);
    } if (e.target.value === 'Sanity Test') {
      this.props.setTextFilter(e.target.value);
    } if (e.target.value === 'Smoke Test') {
      this.props.setTextFilter(e.target.value);
    } if (e.target.value === 'Full Regression') {
      this.props.setTextFilter(e.target.value);
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
                <input className="text-input search"
                type="text" placeholder="Search by Link or Priority level."
                value={this.props.filters.text}
                onChange={this.onTextChange}
                />
          </div>
          <div className="input-group__item">
              <select
                className="select"
                value={this.props.filters.sortBy}
                onChange={this.onPriorityChange}>
                <option value="">Default</option>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
                <option value="p1">p1</option>
                <option value="p2">p2</option>
                <option value="p3">p3</option>
                <option value="Urgent">Urgent</option>
                <option value="Always">Always</option>
                <option value="Never">Never</option>
                <option value="Sanity Test">Sanity Test</option>
                <option value="Smoke Test">Smoke Test</option>
                <option value="Full Regression">Full Regression</option>
              </select>
          </div>
          <div className="input-group__item">
                <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByPriority: () => dispatch(sortByPriority()),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);