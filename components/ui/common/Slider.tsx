import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

import "@/styles/components/_slider.scss";

const SliderComponent = ({
  id,
  value = [1, 5000],
  onChange,
}: {
  id: string;
  value: number[];
  onChange: any;
}) => {
  const [sliderValue, setSliderValue] = useState([0, 10000]);

  const handleChange = (val: number[]) => {
    console.log(val);
    setSliderValue(val);
    onChange(id, val);
  };
  return (
    <Slider.Root
      className="slider-root"
      value={sliderValue}
      onValueChange={handleChange}
      max={10000000}
      step={50}
      min={0}
    >
      <Slider.Track
        className="slider-track"
        style={{ width: "100%", color: "#D9D9D9" }}
      >
        <Slider.Range className="slider-range" />
      </Slider.Track>
      <Slider.Thumb className="slider-thumb" />
      <Slider.Thumb className="slider-thumb" />
    </Slider.Root>
  );
};

export default SliderComponent;
