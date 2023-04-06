import { Hello } from "@/components/__shared__/hello/hello";
import { render, screen } from "@testing-library/react";
it("should render hello.component", () => {
  render(<Hello />);
  expect(screen.getByText(/Hello/i)).toBeInTheDocument();
});
