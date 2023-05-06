import { act, render, screen } from "@testing-library/react";
import Menu from "./Menu";
import { MenuOptionsObject } from "./ContextMenu";
import { mockTheme } from "../testing-utilities";

const mockData: MenuOptionsObject = {
  theme: {
    get: mockTheme,
    set: () => {}
  },
  export: () => {}
};

describe("Menu Component", () => {
  test("should only render button by default", () => {
    const {container} = render(<Menu menuOptions={mockData}/>);

    expect(screen.getByRole("button")).toBeInTheDocument();

    const contextMenu = container.querySelector("#ContextMenu");
    expect(contextMenu).not.toBeVisible();
  });

  test("should toggle visibility when button clicked", () => {
    const {container} = render(<Menu menuOptions={mockData}/>);
    const contextMenu = container.querySelector("#ContextMenu");
    const button = screen.getByRole("button");

    expect(contextMenu).not.toBeVisible();
    act(()=> button.click());
    expect(contextMenu).toBeVisible();
    act(()=> button.click());
    expect(contextMenu).not.toBeVisible();
    act(()=> button.click());
    expect(contextMenu).toBeVisible();
    act(()=> button.click());
    expect(contextMenu).not.toBeVisible();
  });
});