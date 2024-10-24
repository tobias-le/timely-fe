import React from "react";
import { Paper, Typography, Grid } from "@mui/material";

interface SummaryItemProps {
  title: string;
  count: number;
  change: number;
  changeText: string;
}

const SummaryItem: React.FC<SummaryItemProps> = ({
  title,
  count,
  change,
  changeText,
}) => (
  <div className="p-4">
    <Typography variant="subtitle2" className="text-gray-500 mb-2">
      {title}
    </Typography>
    <Typography variant="h4" className="font-bold mb-1">
      {count}
    </Typography>
    <Typography
      variant="body2"
      className={`${change > 0 ? "text-green-500" : "text-red-500"}`}
    >
      {change > 0 ? "+" : ""}
      {change} {changeText}
    </Typography>
  </div>
);

const AttendanceSummary: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper>
          <Typography variant="h6" className="p-4 bg-blue-50 text-blue-700">
            Present Summary
          </Typography>
          <div className="flex">
            <SummaryItem
              title="On time"
              count={265}
              change={12}
              changeText="vs yesterday"
            />
            <SummaryItem
              title="Late clock-in"
              count={62}
              change={-6}
              changeText="vs yesterday"
            />
            <SummaryItem
              title="Early clock-in"
              count={224}
              change={-6}
              changeText="vs yesterday"
            />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper>
          <Typography variant="h6" className="p-4 bg-red-50 text-red-700">
            Not Present Summary
          </Typography>
          <div className="flex">
            <SummaryItem
              title="Absent"
              count={42}
              change={12}
              changeText="vs yesterday"
            />
            <SummaryItem
              title="No clock-in"
              count={36}
              change={-6}
              changeText="vs yesterday"
            />
            <SummaryItem
              title="No clock-out"
              count={0}
              change={0}
              changeText="vs yesterday"
            />
            <SummaryItem
              title="Invalid"
              count={0}
              change={0}
              changeText="vs yesterday"
            />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper>
          <Typography variant="h6" className="p-4 bg-green-50 text-green-700">
            Away Summary
          </Typography>
          <div className="flex">
            <SummaryItem
              title="Day off"
              count={0}
              change={-2}
              changeText="vs yesterday"
            />
            <SummaryItem
              title="Time off"
              count={0}
              change={-6}
              changeText="vs yesterday"
            />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AttendanceSummary;
