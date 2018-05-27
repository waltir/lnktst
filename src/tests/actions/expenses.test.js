import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: {
            id: '123abc'
        },
        updates: undefined
    });
});