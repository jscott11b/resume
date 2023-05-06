import { render, screen } from "@testing-library/react";
import Contact from "./Contact";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "../testing-utilities";

const EMAIL_ADDRESS = "notanemail@email.com";
const LINKEDIN_BASE_URL = "https://localhost/not-a-real-url"
const LINKEDIN_USERNAME = "notAUserName";

jest.mock("../resume", () => {
  return {
    contact: {
      email: EMAIL_ADDRESS,
      linkedIn: `${LINKEDIN_BASE_URL}/${LINKEDIN_USERNAME}`
    }
  }
});

describe("Contact Component", () => {
  test("should render LinkedIn text and link when text layout", () => {
    render(<ThemeProvider theme={{...mockTheme, isWebLayout: false}}><Contact/></ThemeProvider>);

    const key = screen.getByText("LinkedIn");
    const link = key.parentElement!.querySelector("a") as HTMLAnchorElement;

    expect(link).toHaveAttribute("href", `${LINKEDIN_BASE_URL}/${LINKEDIN_USERNAME}`);
    expect(link).toHaveTextContent(LINKEDIN_USERNAME);
  });

  test("should render LinkedIn icon and link when web layout", () => {
    render(<ThemeProvider theme={{...mockTheme, isWebLayout: true}}><Contact/></ThemeProvider>);

    const key = screen.getByAltText("LinkedIn Logo");
    expect(key).toHaveAttribute("src","LinkedIn.png");
    const link = key.parentElement!.parentElement!.querySelector("a") as HTMLAnchorElement;
    expect(link).toHaveAttribute("href", `${LINKEDIN_BASE_URL}/${LINKEDIN_USERNAME}`);
    expect(link).toHaveTextContent(LINKEDIN_USERNAME);
  });

  test("should render email text and link when text layout", () => {
    render(<ThemeProvider theme={{...mockTheme, isWebLayout: false}}><Contact/></ThemeProvider>);

    const key = screen.getByText("Email");
    const link = key.parentElement!.querySelector("a") as HTMLAnchorElement;

    expect(link).toHaveAttribute("href", `mailto:${EMAIL_ADDRESS}`);
    expect(link).toHaveTextContent(EMAIL_ADDRESS);
  });

  test("should render email icon and link when web layout", () => {
    render(<ThemeProvider theme={{...mockTheme, isWebLayout: true}}><Contact/></ThemeProvider>);

    const link = screen.getByText(EMAIL_ADDRESS);
    expect(link).toHaveAttribute("href", `mailto:${EMAIL_ADDRESS}`);

    const icon = link.parentElement!.querySelector("span > svg") as SVGElement;
    expect(icon).toHaveClass("fa-envelope");
  });
});