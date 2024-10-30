import { render } from "@testing-library/react"
import App from "./App";

test("Snapshot For App Component", () => {
  const conatiner = render(<App />);
  expect(conatiner).toMatchSnapshot();
})