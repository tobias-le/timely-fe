import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  TextField,
  Box,
  Paper,
} from "@mui/material";
import {
  Add,
  Search,
  Notifications,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import AttendanceSummary from "./AttendanceSummary";
import EmployeeTable from "./EmployeeTable";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <AppBar position="static" className="bg-gray-900">
        <Toolbar>
          <Typography variant="h6" className="flex-grow">
            <span className="font-bold text-yellow-400">time.ly</span> Time
            Management
          </Typography>
          <div className="flex items-center space-x-4">
            <Button color="inherit">Attendance</Button>
            <Button color="inherit">
              Overtime{" "}
              <span className="ml-1 px-1 bg-red-500 rounded-full text-xs">
                12
              </span>
            </Button>
            <Button color="inherit">
              Time Off{" "}
              <span className="ml-1 px-1 bg-red-500 rounded-full text-xs">
                50
              </span>
            </Button>
            <Button color="inherit">
              Shift Schedule{" "}
              <span className="ml-1 px-1 bg-red-500 rounded-full text-xs">
                1
              </span>
            </Button>
            <Button color="inherit">Work Time</Button>
          </div>
          <IconButton color="inherit" className="ml-4">
            <Add />
          </IconButton>
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton color="inherit">
            <img
              src="/placeholder.svg"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box className="flex-grow p-6">
        <Paper className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <Typography variant="h5" className="font-bold">
                Attendance
              </Typography>
              <div className="flex items-center space-x-2">
                <IconButton size="small">
                  <ArrowBack />
                </IconButton>
                <Typography>Monday, 15 October</Typography>
                <IconButton size="small">
                  <ArrowForward />
                </IconButton>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outlined">Attendance Report</Button>
              <Button variant="contained" color="primary">
                Add Attendance
              </Button>
            </div>
          </div>

          <AttendanceSummary />

          <div className="mt-6 flex space-x-4">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search employee"
              className="flex-grow"
            />
            <Button variant="outlined">Date Range</Button>
            <Button variant="outlined">Advance Filter</Button>
          </div>

          <EmployeeTable />
        </Paper>
      </Box>
    </div>
  );
};

export default Dashboard;
