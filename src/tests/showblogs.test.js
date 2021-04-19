import React from "react"; //Testing react component
import ShowBlogs from "../components/ShowBlogs";
import { render,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders correctly", () => {
  const { getByTestId } = render(<ShowBlogs />);
  const headerEl = getByTestId("header");
  expect(headerEl.textContent).toBe("BLOG POSTS");
});

test("delete button renders with delete", () => {
  const { getByTestId } = render(<ShowBlogs />);
  const delBtn = getByTestId("del-btn");
  expect(delBtn.textContent).toBe("Delete");
});
