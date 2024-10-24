import { Employee } from "./employee";

export interface SummaryItemProps {
  title: string;
  count: number;
  change: number;
  changeText: string;
}

export interface TeamSummary {
  teamName: string;
  totalHours: number;
  averageHoursPerDay: number;
  attendanceRate: number;
}

export interface AttendanceDetail {
  id: number;
  employeeName: string;
  date: string;
  present: boolean;
}

export interface AttendanceDetailsModalProps {
  open: boolean;
  onClose: () => void;
  details: AttendanceDetail[];
}

export interface Team {
  teamId: number;
  name: string;
  manager: string;
  members: string[];
}

export interface TeamAttendanceDetail {
  attendanceId: number;
  team: {
    id: number;
    name: string;
    manager: Employee;
    members: Employee[];
  };
  member: Employee;
  date: string;
  clockInTime: string;
  clockOutTime: string;
}
