import { useEffect, useState } from "react";
import { StyledStatMeter } from "../../styles/StatMeter.styled";

interface props {
  name: string;
  value: number;
  maxValue: number;
  color: string;
}

export const StatMeter = ({ name, value, maxValue, color }: props) => {
  const [meterWidth, setMeterWidth] = useState("0px");
  useEffect(() => {
    let ratio = value / maxValue;
    let val = 250 * ratio - 2;
    let newval = val.toString();

    setMeterWidth(newval + "px");
  }, [value, maxValue]);

  return (
    <StyledStatMeter>
      <div>{name}</div>
      <div className="max" style={{ backgroundColor: "#b1b1b1" }}>
        <div
          className="statvalue"
          style={{ width: meterWidth, backgroundColor: color }}
        >
          <div className="text">{value}</div>
        </div>
      </div>
    </StyledStatMeter>
  );
};

export default StatMeter;
