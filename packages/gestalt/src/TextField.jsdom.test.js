// @flow strict
import { createRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import TextField from './TextField.js';

jest.mock('./contexts/I18nProvider.js');

describe('TextField', () => {
  it('renders error message on errorMessage prop change', () => {
    const { getByText, rerender } = render(
      <TextField id="test" onChange={jest.fn()} onFocus={jest.fn()} onBlur={jest.fn()} />,
    );
    expect(() => {
      // eslint-disable-next-line testing-library/prefer-screen-queries -- Please fix the next time this file is touched!
      getByText('Error message');
    }).toThrow('Unable to find an element with the text: Error message');

    rerender(
      <TextField
        errorMessage="Error message"
        id="test"
        onChange={jest.fn()}
        onFocus={jest.fn()}
        onBlur={jest.fn()}
      />,
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries -- Please fix the next time this file is touched!
    expect(getByText('Error message')).toBeVisible();
  });

  it('reads the error message on focus', () => {
    const { getByDisplayValue } = render(
      <TextField
        errorMessage="Error message"
        id="test"
        onChange={jest.fn()}
        onFocus={jest.fn()}
        onBlur={jest.fn()}
        value="TextField Text"
      />,
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries -- Please fix the next time this file is touched!
    const input = getByDisplayValue('TextField Text');
    fireEvent.focus(input);
    expect(input).toHaveAccessibleDescription('Error message');
  });

  it('forwards a ref to <input />', () => {
    const ref = createRef();
    render(
      <TextField
        id="test"
        onChange={jest.fn()}
        onFocus={jest.fn()}
        onBlur={jest.fn()}
        value="TextField Text"
        ref={ref}
      />,
    );
    expect(ref.current instanceof HTMLInputElement).toEqual(true);
    expect(ref.current?.value).toEqual('TextField Text');
  });

  it('handles blur events', () => {
    const mockBlur = jest.fn();
    const { getByDisplayValue } = render(
      <TextField id="test" onBlur={mockBlur} onChange={jest.fn()} value="TextField Text" />,
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries -- Please fix the next time this file is touched!
    fireEvent.blur(getByDisplayValue('TextField Text'));
    expect(mockBlur).toHaveBeenCalled();
  });

  it('handles change events', () => {
    const mockChange = jest.fn();
    const { container } = render(
      <TextField id="test" onChange={mockChange} value="TextField Text" />,
    );

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access -- Please fix the next time this file is touched!
    const input = container.querySelector('input');
    expect(input).not.toBe(null);

    if (input) {
      fireEvent.change(input, {
        target: { value: 'panda' },
      });
    }
    expect(mockChange).toHaveBeenCalled();
  });

  it('handles focus events', () => {
    const mockFocus = jest.fn();
    const { getByDisplayValue } = render(
      <TextField id="test" onChange={jest.fn()} onFocus={mockFocus} value="TextField Text" />,
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries -- Please fix the next time this file is touched!
    fireEvent.focus(getByDisplayValue('TextField Text'));
    expect(mockFocus).toHaveBeenCalled();
  });

  it('handles key down events', () => {
    const mockKeyDown = jest.fn();
    const { container } = render(
      <TextField id="test" onChange={() => {}} onKeyDown={mockKeyDown} value="TextField Text" />,
    );

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access -- Please fix the next time this file is touched!
    const input = container.querySelector('input');
    expect(input).not.toBe(null);

    if (input) {
      fireEvent.keyDown(input, {
        target: { value: 'panda' },
      });
    }
    expect(mockKeyDown).toHaveBeenCalled();
  });

  it('shows a label for the text field', () => {
    const { getByText } = render(
      <TextField
        id="test"
        label="Label for the text field"
        onChange={() => {}}
        value="TextField Text"
      />,
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries -- Please fix the next time this file is touched!
    expect(getByText('Label for the text field')).toBeVisible();
  });

  it('shows helper text for the text field', () => {
    const { getByText } = render(
      <TextField
        id="test"
        label="Label for the text field"
        helperText="Helper text for the text field"
        onChange={() => {}}
        value="TextField Text"
      />,
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries -- Please fix the next time this file is touched!
    expect(getByText('Helper text for the text field')).toBeVisible();
  });

  it('hides the helper text for the text field when an error message is shown', () => {
    const { getByText } = render(
      <TextField
        id="test"
        label="Label for the text field"
        helperText="Helper text for the text field"
        errorMessage="Error message for the text field"
        onChange={() => {}}
        value="TextField Text"
      />,
    );
    expect(() => {
      // eslint-disable-next-line testing-library/prefer-screen-queries -- Please fix the next time this file is touched!
      getByText('Helper text for the text field');
    }).toThrow('Unable to find an element with the text: Helper text for the text field');
  });

  it('adds a "medium" classname by default', () => {
    const { container } = render(
      <TextField id="test" onChange={() => {}} value="TextField Text" />,
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access -- Please fix the next time this file is touched!
    expect(container.querySelector('.medium')).toBeVisible();
  });

  it('adds a "large" classname when size is set to "lg"', () => {
    const { container } = render(
      <TextField id="test" onChange={() => {}} value="TextField Text" size="lg" />,
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access -- Please fix the next time this file is touched!
    expect(container.querySelector('.large')).toBeVisible();
  });
});
