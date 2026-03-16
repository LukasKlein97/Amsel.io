/**
 * API utility functions for amsel.io
 */

export interface RiskFactor {
  is_ok: boolean | null;
  count: number;
  risk_assessment: string | null;
}

export interface ActionPlanRiskFactor {
  is_solved: boolean;
  count: number;
  risk_assessment: string | null;
}

export interface ChartData {
  risk_factors: RiskFactor[];
  action_plan_risk_factors: ActionPlanRiskFactor[];
  files: unknown[];
}

/**
 * Sends chart/diagram data to the API endpoint
 * @param baseUrl - The base URL of the API (e.g., "https://api.example.com")
 * @param teamId - The team ID (default: 1)
 * @param data - The chart data to send
 * @returns Promise with the response
 */
export async function sendChartData(
  baseUrl: string,
  teamId: number = 1,
  data: ChartData
): Promise<Response> {
  const url = `${baseUrl}/teams/${teamId}/charts`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to send chart data: ${response.statusText}`);
  }

  return response;
}
