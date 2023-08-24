import App from "../App";
import {render} from '@testing-library/react';

describe("App", () => {
  it("should work as expected", () => {
    render(<App />);
    expect(1 + 1).toBe(2);
  });
});