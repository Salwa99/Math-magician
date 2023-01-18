import operate from './operate'

test('let\'s test our operate', () => {
    expect(operate(3, 9, '+')).toBe('12');
    expect(operate(3, 1, '-')).toBe('2');
    expect(operate(1, 2, 'x')).toBe('2');
    expect(operate(2, 2, '÷')).toBe('1');
    expect(operate(7, 2, '%')).toBe('1');
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
    expect(operate(1, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
    });