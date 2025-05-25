// SliderRangeWithTooltip.jsx
import * as Slider from "@radix-ui/react-slider";
import { useState, useEffect } from "react";

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
  const [sliderValue, setSliderValue] = useState(value);

  const [min, max] = value || [0, 10000];

  const handleChange = (val: number[]) => {
    setSliderValue(val);
    onChange(id, val);
  };

  // useEffect(() => {
  //   setSliderValue(value);
  // }, [value]);

  return (
    <div className="slider-container">
      {/* Tooltips for each thumb */}

      {/* Range Slider */}
      <Slider.Root
        className="slider-root"
        value={sliderValue || [20, 9900]}
        onValueChange={handleChange}
        min={value[0]}
        max={value[1]}
        step={(max - min) / 100}
      >
        <Slider.Track className="slider-track">
          <Slider.Range className="slider-range" />
        </Slider.Track>
        <Slider.Thumb className="slider-thumb" aria-label="Minimum value" />
        <Slider.Thumb className="slider-thumb" aria-label="Maximum value" />
        <div
          className="slider-tooltip min"
          style={{ left: `calc(${sliderValue[0] / (value[1] / 100)}% + 10px)` }}
        >
          {sliderValue[0].toFixed()}
        </div>
        <div
          className="slider-tooltip max"
          style={{ left: `calc(${sliderValue[1] / (value[1] / 100)}%)` }}
        >
          {sliderValue[1].toFixed()}
        </div>
      </Slider.Root>
    </div>
  );
}
