import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

const writeText = vi.fn<(text: string) => Promise<void>>();

describe("CopyEmailButton", () => {
  beforeEach(() => {
    writeText.mockReset();
    writeText.mockResolvedValue(undefined);

    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
  });

  it("copies the address and announces the result", async () => {
    render(<CopyEmailButton email="hello@example.com" />);

    fireEvent.click(screen.getByRole("button", { name: /copy email/i }));

    expect(writeText).toHaveBeenCalledWith("hello@example.com");
    expect(
      await screen.findByText("Email address copied to clipboard."),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /copied/i })).toBeInTheDocument();
  });

  it("shows a recovery message when copying fails", async () => {
    writeText.mockRejectedValueOnce(new Error("denied"));

    render(<CopyEmailButton email="hello@example.com" />);
    fireEvent.click(screen.getByRole("button", { name: /copy email/i }));

    expect(
      await screen.findByText("Could not copy. Select the address instead."),
    ).toBeInTheDocument();
  });
});
