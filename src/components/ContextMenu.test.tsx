import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DefaultTheme } from "styled-components";
import { mockTheme } from "../testing-utilities";
import ContextMenu, { MenuOptionsObject } from "./ContextMenu";

jest.mock("../themes", () => {
  return {
    themes: [
      {...mockTheme, isWebLayout: true },
      {...mockTheme, isWebLayout: false}
    ]
  }
});

const menuOptions = {
  theme: {
    get: mockTheme,
    set: () => {}
  },
  export: () => {}
};

describe("ContextMenu Component", () => {
  test("should render successfully", () => {
    render(<ContextMenu isVisible={true} menuOptions={menuOptions} />);

    const checkbox = screen.getByLabelText("Web Layout") as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Download as PDF");
    expect(button).toBeInTheDocument();
  });

  it.each([false,true])("should render isWebLayout", (isWebLayout: boolean) => {
    render(
      <ContextMenu 
        isVisible={true} 
        menuOptions={{...menuOptions, theme: {...menuOptions.theme, get: {...menuOptions.theme.get, isWebLayout: isWebLayout}}}} />
    );

    const checkbox = screen.getByLabelText("Web Layout") as HTMLInputElement;
    isWebLayout ? expect(checkbox).toBeChecked() : expect(checkbox).not.toBeChecked();
  });

  it.each([false, true])("should render based on isVisible", (isVisible) => {
    const {container} = render(<ContextMenu isVisible={isVisible} menuOptions={menuOptions} />);
    
    const expectedDisplayValue: string = isVisible ? "block" : "none";
    expect(container.firstChild).toHaveStyle({"display": expectedDisplayValue});
  });

  test("should return first theme when checkbox checked", async () => {
    const user = userEvent.setup();

    let selectedTheme: DefaultTheme | undefined;
    const options: MenuOptionsObject = {...menuOptions, theme: {get: {...menuOptions.theme.get, isWebLayout: false}, set: (theme: DefaultTheme) => {selectedTheme = theme;}}};

    render(<ContextMenu isVisible={true} menuOptions={options} />);

    const checkbox = screen.getByLabelText("Web Layout") as HTMLInputElement;
    await user.click(checkbox);

    expect(selectedTheme!.isWebLayout).toBe(true);
  });

  test("should return second theme when checkbox unchecked", async () => {
    const user = userEvent.setup();

    let selectedTheme: DefaultTheme | undefined;
    const options: MenuOptionsObject = {...menuOptions, theme: {get: {...menuOptions.theme.get, isWebLayout: true}, set: (theme: DefaultTheme) => {selectedTheme = theme;}}};

    render(<ContextMenu isVisible={true} menuOptions={options} />);

    const checkbox = screen.getByLabelText("Web Layout") as HTMLInputElement;
    await user.click(checkbox);

    expect(selectedTheme!.isWebLayout).toBe(false);
  });

  test("should call export when button clicked", async () => {
    const mockExportFn = jest.fn(() => {});
    const user = userEvent.setup();
    const options: MenuOptionsObject = {export: mockExportFn, theme: {...menuOptions.theme}};

    render(<ContextMenu isVisible={true} menuOptions={options} />);

    const button = screen.getByText("Download as PDF") as HTMLButtonElement;
    await user.click(button);

    expect(mockExportFn).toHaveBeenCalled();
  });
});