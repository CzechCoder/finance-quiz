import { calculateSmileyColorMeter } from "../../utils/calculateResultSliders";
import styles from "./ResultMeter.module.scss";
import { Box, LinearProgress } from "@mui/material";

interface ResultMeterProps {
  name: string;
  value: number;
}

const ResultMeter = ({ name, value }: ResultMeterProps) => {
  const imageSrc = `./images/smiley_${calculateSmileyColorMeter(value)}.svg`;
  return (
    <div className={styles.result_meter}>
      <div>
        <div className={styles.progressbar_headerbox}>
          <div className={styles.progressbar_headline}>{name}</div>
        </div>
      </div>
      <div className={styles.progressbar}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{ padding: "8px", marginTop: "10px" }}
        />
        <Box
          component="img"
          alt="Smiley"
          src={imageSrc}
          className={styles.progressbar_image}
          sx={{ left: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ResultMeter;
