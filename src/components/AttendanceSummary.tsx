import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import ApiService from "../services/api.service"; // Import ApiService
import { TeamSummary, Team } from "../types/attendance"; // Import from the new location
import CircularProgress from "@mui/material/CircularProgress";

const AttendanceSummary: React.FC = () => {
  const [teamId, setTeamId] = useState<number>(1);
  const [teams, setTeams] = useState<Team[]>([]);
  const [summaryData, setSummaryData] = useState<TeamSummary | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);

  useEffect(() => {
    ApiService.getTeams()
      .then((data) => {
        setTeams(data);
        if (data.length > 0) {
          setTeamId(data[0].teamId);
        }
      })
      .catch((error) => console.error("Error fetching teams:", error));
  }, []);

  useEffect(() => {
    if (teamId) {
      setSummaryLoading(true);
      setSummaryData(null);
      ApiService.getTeamAttendanceSummary(teamId)
        .then((data) => setSummaryData(data))
        .catch((error) => console.error("Error fetching summary data:", error))
        .finally(() => setSummaryLoading(false));
    }
  }, [teamId]);

  //   const handleTeamChange = (event: any) => {
  //     setTeamId(event.target.value);
  //   };

  return (
    <>
      <FormControl
        className="mb-6"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            borderRadius: "8px",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#EAB308", // yellow-500
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#EAB308",
            },
          },
          "& .MuiInputLabel-root": {
            color: "gray",
            "&.Mui-focused": {
              color: "#EAB308",
            },
          },
          "& .MuiSelect-icon": {
            color: "#4B5563", // gray-600
          },
        }}
      >
        <InputLabel sx={{ backgroundColor: "white", px: 1 }}>
          Select Team
        </InputLabel>
        <Select
          value={teamId}
          onChange={(e) => setTeamId(e.target.value as number)}
        >
          {teams.map((team) => (
            <MenuItem key={team.teamId} value={team.teamId}>
              {team.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {summaryLoading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        summaryData && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper>
                <div className="p-4">
                  <Typography variant="subtitle1" className="text-gray-500">
                    Total Hours
                  </Typography>
                  <Typography variant="h4" className="font-bold">
                    {summaryData.totalHours}
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper>
                <div className="p-4">
                  <Typography variant="subtitle1" className="text-gray-500">
                    Average Hours/Day
                  </Typography>
                  <Typography variant="h4" className="font-bold">
                    {summaryData.averageHoursPerDay}
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper>
                <div className="p-4">
                  <Typography variant="subtitle1" className="text-gray-500">
                    Attendance Rate
                  </Typography>
                  <Typography variant="h4" className="font-bold">
                    {summaryData.attendanceRate}%
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        )
      )}
    </>
  );
};

export default AttendanceSummary;
