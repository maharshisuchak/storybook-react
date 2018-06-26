import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {

    state = {
        calenderFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        // this.props.dispatch(setStartDate(startDate));
        // this.props.dispatch(setEndDate(endDate));

        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
    };

    onTextChange = (event) => {
        // this.props.dispatch(setTextFilter(event.target.value));
        this.props.setTextFilter(event.target.value);
    };

    onSortChange = (event) => {
        if (event.target.value === 'date') {
            // this.props.dispatch(sortByDate());
            this.props.sortByDate();
        } else if (event.target.value === 'amount') {
            // this.props.dispatch(sortByAmount())
            this.props.sortByAmount();
        }
    };
            
    render() {
        return (
            <div>
                <input type='text'
                    value={this.props.filters.text}
                    onChange={this.onTextChange} />

                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => (dispatch(setTextFilter(text))),
    sortByDate: (text) => (dispatch(sortByDate)),
    sortByAmount: (text) => (dispatch(sortByAmount)),
    setStartDate: (startDate) => (dispatch(setStartDate(startDate))),
    setEndDate: (endDate) => (dispatch(setEndDate(endDate))),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

// export default ExpenseListFilters;
