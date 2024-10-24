import API_CONFIG from "../config/api.config";
import {
  SummaryItemProps,
  AttendanceDetail,
  TeamSummary,
  Team,
  TeamAttendanceDetail,
} from "../types/attendance";

// Add these interfaces at the top of the file
interface Employee {
  name: string;
  overtime: string | null;
  picture: string | null;
  location: string;
  note: string;
}

class ApiService {
  private static async fetchWithConfig(
    endpoint: string,
    options?: RequestInit
  ): Promise<any> {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    const defaultOptions: RequestInit = {
      headers: API_CONFIG.HEADERS,
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("API call failed:", error);
      throw error;
    }
  }

  public static async getEmployees(): Promise<Employee[]> {
    const response = await this.fetchWithConfig(API_CONFIG.ENDPOINTS.EMPLOYEES);
    return response.content as Employee[];
  }

  public static async getAttendanceSummary(): Promise<SummaryItemProps[]> {
    return this.fetchWithConfig(
      API_CONFIG.ENDPOINTS.ATTENDANCE_SUMMARY
    ) as Promise<SummaryItemProps[]>;
  }

  public static async getAttendanceDetails(): Promise<AttendanceDetail[]> {
    return this.fetchWithConfig(
      API_CONFIG.ENDPOINTS.ATTENDANCE_DETAILS
    ) as Promise<AttendanceDetail[]>;
  }

  public static async getTeamAttendanceSummary(
    teamId: number
  ): Promise<TeamSummary> {
    return this.fetchWithConfig(
      `/api/attendance/team/${teamId}/summary`
    ) as Promise<TeamSummary>;
  }

  public static async getTeams(): Promise<Team[]> {
    return this.fetchWithConfig("/api/teams") as Promise<Team[]>;
  }

  public static async getTeamAttendanceDetails(
    teamId: number
  ): Promise<TeamAttendanceDetail[]> {
    return this.fetchWithConfig(`/api/attendance/team/${teamId}`) as Promise<
      TeamAttendanceDetail[]
    >;
  }

  // Add other API methods here
}

export default ApiService;
