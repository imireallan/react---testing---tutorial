import { render, screen } from "@testing-library/react";
import Users from "./Users";

test("it displays a list of users", async () => {
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    json: async () => {
      return [{ id: 1, username: "username", email: "email@email.com" }];
    },
    ok: true,
  });
  render(<Users />);
  let listEl = await screen.findAllByRole("listitem");
  expect(listEl).not.toHaveLength(0);
});
