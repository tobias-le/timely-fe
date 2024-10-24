import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { TeamAttendanceDetail } from "../types/attendance";
import CircularProgress from "@mui/material/CircularProgress";

interface AttendanceDetailsModalProps {
  open: boolean;
  onClose: () => void;
  details: TeamAttendanceDetail[];
  loading: boolean;
}

const AttendanceDetailsModal: React.FC<AttendanceDetailsModalProps> = ({
  open,
  onClose,
  details,
  loading,
}) => {
  const formatDateTime = (dateTime: string) => {
    return new Date(dateTime).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Team Attendance Details</DialogTitle>
      <DialogContent>
        {loading ? (
          <div className="flex justify-center p-4">
            <CircularProgress />
          </div>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Employee Name</TableCell>
                  <TableCell>Job Title</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Clock In</TableCell>
                  <TableCell>Clock Out</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {details.map((detail) => (
                  <TableRow key={detail.attendanceId}>
                    <TableCell>{detail.member.name}</TableCell>
                    <TableCell>{detail.member.jobTitle}</TableCell>
                    <TableCell>
                      {new Date(detail.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{formatDateTime(detail.clockInTime)}</TableCell>
                    <TableCell>{formatDateTime(detail.clockOutTime)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AttendanceDetailsModal;
