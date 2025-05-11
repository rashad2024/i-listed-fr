// SliderRangeWithTooltip.jsx
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

import "@/styles/components/_slider.scss";

export default function SliderComponent({
  id,
  value = [1, 5000],
  onChange,
}: {
  id: string;
  value: number[];
  onChange: any;
}) {
  const [sliderValue, setSliderValue] = useState([20, 10000]);

  const [min, max] = value;

  const handleChange = (val: number[]) => {
    console.log(val);
    setSliderValue(val);
    onChange(id, val);
  };

  return (
    <div className="slider-container">
      {/* Tooltips for each thumb */}

      {/* Range Slider */}
      <Slider.Root
        className="slider-root"
        value={value || [20, 9900]}
        onValueChange={handleChange}
        min={20}
        max={10000}
        step={100}
      >
        <Slider.Track className="slider-track">
          <Slider.Range className="slider-range" />
        </Slider.Track>
        <Slider.Thumb className="slider-thumb" aria-label="Minimum value" />
        <Slider.Thumb className="slider-thumb" aria-label="Maximum value" />
        <div
          className="slider-tooltip min"
          style={{ left: `calc(${min / 100}%)` }}
        >
          {min}
        </div>
        <div
          className="slider-tooltip max"
          style={{ left: `calc(${max / 100}%)` }}
        >
          {max}
        </div>
      </Slider.Root>
    </div>
  );
}
