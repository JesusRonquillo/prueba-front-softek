import { describe, it, expect } from "vitest";

describe("Example Test Suite", () => {
  it("should pass a simple test", () => {
    expect(1 + 1).toBe(2);
  });

  it("should work with strings", () => {
    const greeting = "Hello, World!";
    expect(greeting).toContain("World");
  });

  it("should work with arrays", () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers).toHaveLength(5);
    expect(numbers).toContain(3);
  });

  it("should work with objects", () => {
    const user = { name: "John", age: 30 };
    expect(user).toHaveProperty("name", "John");
    expect(user.age).toBeGreaterThan(18);
  });
});
