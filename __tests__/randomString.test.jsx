import { randomString } from "../src/client/lib/randomString";

describe("random string", () => {
  it("shows random number to not be the same", () => {
    const hash1 = randomString(30);
    const hash2 = randomString(30);
    let isEqual = false;

    if (hash1 !== hash2) {
      isEqual = true;
    }

    expect(isEqual).toBeTruthy();
  });
});
