import {getDefaultNormalizer, render, screen} from "@testing-library/react"
import { CommaWrap } from "./CommaWrap"

describe('CommaWrap component', () => {
  test('should not split text when no comma', () => {
    const TEST_TEXT = "this is text without a comma";

    render(<CommaWrap text={TEST_TEXT} />);

    const element = screen.getByText(TEST_TEXT);
    expect(element).toBeTruthy();
  });

  test('should split into 2 elements when 1 comma', () => {
    const PART_ONE = "this is text with one comma";
    const PART_TWO = "and no more.";
    const TEST_TEXT = `${PART_ONE}, ${PART_TWO}`;

    render(<CommaWrap text={TEST_TEXT} />);

    const options = { exact: true, normalizer: getDefaultNormalizer({trim: false}) };

    expect(screen.getByText(`${PART_ONE}, `, options)).toBeTruthy();
    expect(screen.getByText(PART_TWO, options)).toBeTruthy();
  });

  test('should split into 3 elements when 2 commas', () => {
    const PART_ONE = "this is text with one comma";
    const PART_TWO = "a second comma";
    const PART_THREE = "but no third comma";
    const TEST_TEXT = `${PART_ONE}, ${PART_TWO}, ${PART_THREE}`;

    render(<CommaWrap text={TEST_TEXT} />);
    
    const options = { exact: true, normalizer: getDefaultNormalizer({trim: false}) };

    expect(screen.getByText(`${PART_ONE}, `, options)).toBeTruthy();
    expect(screen.getByText(`${PART_TWO}, `, options)).toBeTruthy();
    expect(screen.getByText(PART_THREE, options)).toBeTruthy();
  });
});