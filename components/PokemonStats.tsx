import { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

import { StyledPokemonStats } from "../styles/PokemonStats.styled";
import { StatMeter } from "./StatMeter";

//Pokemon stats, radar chart and some lines idk
export const PokemonStats = ({ stats }: any) => {
  const [statstate, setStats] = useState<any>();
  const [chartStats, setChartStats] = useState<any>([
    {
      subject: "HP",
      A: 0 * 100,

      fullMark: 0,
    },
    {
      subject: "Attack",
      A: 0 * 100,

      fullMark: 190,
    },
    {
      subject: "Defense",
      A: 0 * 100,

      fullMark: 150,
    },
    {
      subject: "Sp. Attack",
      A: 0 * 100,

      fullMark: 150,
    },
    {
      subject: "Sp. Defense",
      A: 0 * 100,

      fullMark: 150,
    },
    {
      subject: "Speed",
      A: 0 * 100,

      fullMark: 150,
    },
  ]);

  useEffect(() => {
    setStats(stats);

    try {
      const data = [
        {
          subject: "HP",
          A: (stats[0].base_stat / 255) * 100,

          fullMark: 0,
        },
        {
          subject: "Attack",
          A: (stats[1].base_stat / 190) * 100,

          fullMark: 190,
        },
        {
          subject: "Defense",
          A: (stats[2].base_stat / 250) * 100,

          fullMark: 150,
        },
        {
          subject: "Sp. Attack",
          A: (stats[3].base_stat / 194) * 100,

          fullMark: 150,
        },
        {
          subject: "Sp. Defense",
          A: (stats[4].base_stat / 230) * 100,

          fullMark: 150,
        },
        {
          subject: "Speed",
          A: (stats[5].base_stat / 200) * 100,

          fullMark: 150,
        },
      ];
      setChartStats(data);
    } catch (e) {
      console.log(e);
    }
  }, [stats]);

  try {
    return (
      <StyledPokemonStats>
        <div className="wrapper-radar">
          <RadarChart
            outerRadius={90}
            width={730}
            height={250}
            data={chartStats}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fontSize: 14,
                fill: "white",
              }}
            />

            <Radar
              dataKey="A"
              stroke="#ffffff"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <PolarRadiusAxis angle={0} domain={[0, 100]} />
          </RadarChart>
          <div>
            <StatMeter
              name={"HP"}
              value={statstate[0].base_stat}
              color={"#ff4f4f"}
              maxValue={255}
            />
          </div>
          <div>
            <StatMeter
              name={"Attack"}
              value={statstate[1].base_stat}
              color={"#ff896c"}
              maxValue={190}
            />
          </div>
          <div>
            <StatMeter
              name={"Defense"}
              value={statstate[2].base_stat}
              color={"#ffd780"}
              maxValue={250}
            />
          </div>
          <div>
            <StatMeter
              name={"Sp. Attack"}
              value={statstate[3].base_stat}
              color={"#70b6f8"}
              maxValue={194}
            />
          </div>
          <div>
            <StatMeter
              name={"Sp. Defense"}
              value={statstate[4].base_stat}
              color={"#86ff7b"}
              maxValue={230}
            />
          </div>
          <div>
            <StatMeter
              name={"Speed"}
              value={statstate[5].base_stat}
              color={"#ffaef4"}
              maxValue={200}
            />
          </div>
        </div>
      </StyledPokemonStats>
    );
  } catch {
    return <></>;
  }
};

export default PokemonStats;
