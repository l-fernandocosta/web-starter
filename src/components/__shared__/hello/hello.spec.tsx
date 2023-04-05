import { render, screen } from "@testing-library/react";
import { Hello } from "./hello";
it("should render hello.component", () => {
  render(<Hello />);
  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});
