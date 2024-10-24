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

interface PaginatedResponse<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalElements: number;
  totalPages: number;
}

class ApiService {
  private static async fetchWithConfig<T>(
    endpoint: string,
    options?: RequestInit
  ) {
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
    const response = await this.fetchWithConfig<PaginatedResponse<Employee>>(
      API_CONFIG.ENDPOINTS.EMPLOYEES
    );
    return response.content;
  }

  public static async getAttendanceSummary(): Promise<SummaryItemProps[]> {
    return this.fetchWithConfig<SummaryItemProps[]>(
      API_CONFIG.ENDPOINTS.ATTENDANCE_SUMMARY
    );
  }

  public static async getAttendanceDetails(): Promise<AttendanceDetail[]> {
    return this.fetchWithConfig<AttendanceDetail[]>(
      API_CONFIG.ENDPOINTS.ATTENDANCE_DETAILS
    );
  }

  public static async getTeamAttendanceSummary(
    teamId: number
  ): Promise<TeamSummary> {
    return this.fetchWithConfig<TeamSummary>(
      `/api/attendance/team/${teamId}/summary`
    );
  }

  public static async getTeams(): Promise<Team[]> {
    return this.fetchWithConfig<Team[]>("/api/teams");
  }

  public static async getTeamAttendanceDetails(
    teamId: number
  ): Promise<TeamAttendanceDetail[]> {
    return this.fetchWithConfig<TeamAttendanceDetail[]>(
      `/api/attendance/team/${teamId}`
    );
  }

  // Add other API methods here
}

export default ApiService;
