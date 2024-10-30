import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test First React app case", () => {
  render(<App />);
  const text = screen.getByText(/First React test/i);
  const para = screen.getByText(/salman nazeer/i);
  const title = screen.getByTitle('AI Genereated img');
  expect(text).toBeInTheDocument();
  expect(para).toBeInTheDocument();
  expect(title).toBeInTheDocument();
})

test('Test Input Filed', () => {
  render(<App />);
  let inpu = screen.getByRole("textbox");
  let checkInputPlaceHolder = screen.getByPlaceholderText("Enter Your Name");
  expect(inpu).toBeInTheDocument();
  expect(inpu).toHaveAttribute("name", "User Name");
  expect(inpu).toHaveAttribute("id", "userID");
  expect(checkInputPlaceHolder).toBeInTheDocument();
})


describe("API Test Cases", () => {
  test("API Test Case 1", () => {
    render(<App />);
    let inpu = screen.getByRole("textbox");
    expect(inpu).toBeInTheDocument();
  })

  test("API Test Case 1", () => {
    render(<App />);
    let inpu = screen.getByRole("textbox");
    expect(inpu).toBeInTheDocument();
  })

  test("API Test Case 1", () => {
    render(<App />);
    let inpu = screen.getByRole("textbox");
    expect(inpu).toBeInTheDocument();
  })
})


describe.skip("UI Test Cases", () => {
  test("UI Test Case 1", () => {
    render(<App />);
    let inpu = screen.getByRole("textbox");
    expect(inpu).toBeInTheDocument();
  })

  test("UI Test Case 1", () => {
    render(<App />);
    let inpu = screen.getByRole("textbox");
    expect(inpu).toBeInTheDocument();
  })

  test("UI Test Case 1", () => {
    render(<App />);
    let inpu = screen.getByRole("textbox");
    expect(inpu).toBeInTheDocument();
  })
})





*********************Next Testing
import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App";

test("On Change Event Testing", () => {
  render(<App/>);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: 'a' } });
  expect(input.value).toBe('a')
})



*********************3rd Testing
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("Initial Render Test", () => {
  render(<App />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

test("Button Click Test", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Updated Data")).toBeInTheDocument();
});