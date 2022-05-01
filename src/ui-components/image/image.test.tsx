import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Image from "./Image";

const initImagePreviewPortal = () => {
  const div = document.createElement("div");
  const body = document.querySelector("body")!;
  div.setAttribute("id", "image-preview");
  body.appendChild(div);
};

describe("Image test cases", () => {
  beforeEach(initImagePreviewPortal);
  afterAll(cleanup);

  let isPreviewVisible = true;

  const hidePreviewFunction = () => {
    isPreviewVisible = false;
  };

  it("should show Image", () => {
    render(
      <Image showPreview={isPreviewVisible} hidePreview={hidePreviewFunction} />
    );

    const imageElement = screen.getByLabelText("image-preview-wrapper");
    expect(imageElement.classList.contains("show-image-preview")).toBeTruthy();
  });

  it("should hide Image", () => {
    render(
      <Image showPreview={isPreviewVisible} hidePreview={hidePreviewFunction} />
    );

    const closeImageElement = screen.getByLabelText("close-image-preview");

    fireEvent.click(closeImageElement);

    render(
      <Image showPreview={isPreviewVisible} hidePreview={hidePreviewFunction} />
    );
    const imageElement = screen.getAllByLabelText("image-preview-wrapper");

    expect(
      imageElement.pop()?.classList.contains("hide-image-preview")
    ).toBeTruthy();
  });
});
