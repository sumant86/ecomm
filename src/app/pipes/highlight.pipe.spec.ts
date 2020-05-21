import { HighlightPipe } from "./highlight.pipe";

describe("HighlightPipe", () => {
  it("create an instance", () => {
    const pipe = new HighlightPipe();
    expect(pipe).toBeTruthy();
  });
  it("Should Add Mark tag for matching text", () => {
    const pipe = new HighlightPipe();
    let mocktext = "match data";
    expect(pipe.transform(mocktext, "match")).toContain("<mark>");
  });
  it("Should return same text for not match", () => {
    const pipe = new HighlightPipe();
    let mocktext = "match data";
    expect(pipe.transform(mocktext, "project")).toBe(mocktext);
  });
  it("Should not highlight text for no args", () => {
    const pipe = new HighlightPipe();
    let mocktext = "match data";
    expect(pipe.transform(mocktext, undefined)).toBe(mocktext);
  });
});
