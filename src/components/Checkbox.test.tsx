import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Checkbox from "./Checkbox"

describe('Checkbox component', () => {
  const TEST_ID = "testCheckBox";
  const TEST_LABEL = "Testing Checkbox";
  const TEST_CLASS_NAME = "ThisIsATestClass";

  const baseProps = {
      id: TEST_ID,
      label: TEST_LABEL,
      className: TEST_CLASS_NAME,
      isChecked: true,
      onChange: () => {}
  };

  test('should associate label to checkbox', () => {
    render(<Checkbox {...baseProps}/>);

    const checkbox = screen.getByLabelText(TEST_LABEL);
    expect(checkbox).toBeTruthy();
  });

  test('should associate className to container', () => {
    const { container } = render(<Checkbox {...baseProps}/>);
    expect(container.getElementsByClassName(TEST_CLASS_NAME).length).toBe(1);
  });

  it.each([false, true])('should render checked based on isChecked', (isChecked) => {
    const props = {...baseProps, isChecked: isChecked};
    render(<Checkbox {...props}/>);
    const checkbox = screen.getByRole<HTMLInputElement>("checkbox");

    isChecked ? expect(checkbox).toBeChecked() : expect(checkbox).not.toBeChecked();
  });

  it.each([false, true])('should toggle event value when clicked', async (initialValue) => {
    const user = userEvent.setup();

    let currentValue = initialValue;
    const expectedValue = !initialValue;

    const testProps = {...baseProps, isChecked: currentValue, onChange: (value: boolean) => {currentValue = value; }};

    render(<Checkbox {...testProps} />);

    const checkbox = screen.getByRole<HTMLInputElement>("checkbox");
    await user.click(checkbox);

    expect(currentValue).toBe(expectedValue);
  });
});