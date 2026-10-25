import { describe, expect, it } from "vitest";
import {
  cn,
  getInitials,
  isExternalUrl,
  isIndexableSiteUrl,
} from "@/lib/utils";

describe("cn", () => {
  it("joins truthy class names", () => {
    expect(cn("base", false, null, "active", undefined)).toBe("base active");
  });
});

describe("getInitials", () => {
  it("uses the first letter of the first two words", () => {
    expect(getInitials("Ada Lovelace")).toBe("AL");
  });

  it("handles surrounding whitespace and extra words", () => {
    expect(getInitials("  Grace Brewster Hopper  ")).toBe("GB");
  });

  it("falls back when the name is empty", () => {
    expect(getInitials("   ")).toBe("YN");
  });
});

describe("isExternalUrl", () => {
  it("detects http and https URLs", () => {
    expect(isExternalUrl("https://example.org")).toBe(true);
    expect(isExternalUrl("http://example.org")).toBe(true);
  });

  it("treats anchors, mailto, and relative paths as internal", () => {
    expect(isExternalUrl("#projects")).toBe(false);
    expect(isExternalUrl("mailto:hello@example.com")).toBe(false);
    expect(isExternalUrl("/about")).toBe(false);
  });
});

describe("isIndexableSiteUrl", () => {
  it("allows a real HTTPS deployment", () => {
    expect(isIndexableSiteUrl("https://portfolio.example.dev")).toBe(true);
  });

  it("rejects local and placeholder hosts", () => {
    expect(isIndexableSiteUrl("http://localhost:3000")).toBe(false);
    expect(isIndexableSiteUrl("https://preview.local")).toBe(false);
    expect(isIndexableSiteUrl("https://example.com")).toBe(false);
    expect(isIndexableSiteUrl("https://preview.example.com")).toBe(false);
  });

  it("rejects non-HTTPS and invalid URLs", () => {
    expect(isIndexableSiteUrl("http://portfolio.example.dev")).toBe(false);
    expect(isIndexableSiteUrl("not a url")).toBe(false);
  });
});
