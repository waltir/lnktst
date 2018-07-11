import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      link: props.expense ? props.expense.link : '',
      note: props.expense ? props.expense.note : '',
      priority: props.priority ? props.expense.priority : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onLinkChange = (e) => {
    const link = e.target.value;
    this.setState(() => ({ link }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onPriorityChange = (e) => {
    const priority = e.target.value;
    this.setState(() => ({ priority }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.link) {
      this.setState(() => ({ error: 'Please provide description and link.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        link: this.state.link,
        priority: this.state.priority,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}

          <input
            type="text" className="text-input"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input
          type="text" className="text-input"
          placeholder="Link - Note: Web urls should include https://"
          value={this.state.link}
          onChange={this.onLinkChange}
          />

          <select className="select" defaultValue={this.state.priority}
          onChange={this.onPriorityChange}>
            <option value="p1">p1</option>
            <option value="p2">p2</option>
            <option value="p3">p3</option>
            <option value="Urgent">Urgent</option>
            <option value="Always">Always</option>
            <option value="Never">Never</option>
            <option value="Smoke Test">Sanity Test</option>
            <option value="Smoke Test">Smoke Test</option>
            <option value="Full Regression">Full Regression</option>
          </select>

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            placeholder="Add a note for your link (optional)"
            className="textarea"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <div>
            <button className="header-button">Submit</button>
          </div>
        </form>
    )
  }
}