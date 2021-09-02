import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import React from "react";
import ImageCard from "../components/card/ImageCard";

describe("ImageCard", () => {
  it("ImageCard: should render correctly", async () => {
    const tree = renderer.create(<ImageCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const handleImage = jest.fn();
  it("ImageCard: should have correct passed props ( :img :url :name )", () => {
    render(
      <ImageCard
        handleImage={handleImage}
        url={"https://www.google.com/"}
        name={"Google Image"}
      />
    );

    const imageElement = screen.queryByRole("img");
    const imageSrc = imageElement.src;
    const imageName = imageElement.name;
    expect(imageSrc).toBe("https://www.google.com/");
    expect(imageName).toBe("Google Image");
  });
});
