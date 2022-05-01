import { cleanup, render, screen } from "@testing-library/react";
import ImageCard from "./ImageCard";
import { initImagePreviewPortal } from "../image/image.test";

describe("Image Card test cases", () => {
  beforeAll(initImagePreviewPortal);
  afterAll(cleanup);
  it("should return ImageCard component based on received props", () => {
    render(<ImageCard breeds={[]} id="2" url="test" width={10} height={10} />);

    const imageCardElement = screen.getByLabelText("image-card-wrapper");
    expect(imageCardElement).toBeTruthy();
  });
});
