import { DataLoader } from "../src/DataLoader";
import { ActivitySummary } from "../src/types";

describe("DataLoader", () => {
  it("should load activity summary correctly", () => {
    const loader = new DataLoader();
    const data: ActivitySummary = {
      userId: "123",
      activityId: 1,
      activityName: "Running",
      durationInSeconds: 3600,
      startTimeInSeconds: 1609459200,
      startTimeOffsetInSeconds: 0,
      activityType: "Running",
      averageHeartRateInBeatsPerMinute: 140,
      activeKilocalories: 800,
      deviceName: "Garmin",
      maxHeartRateInBeatsPerMinute: 180,
    };
    const result = loader.loadActivitySummary(data);
    expect(result).toEqual(data);
  });

  it("should handle empty activity summary", () => {
    const loader = new DataLoader();
    const data: any = {}; // Passing an empty object
    expect(() => loader.loadActivitySummary(data)).toThrowError(
      "Invalid activity data"
    );
  });

  it("should handle partial activity summary", () => {
    const loader = new DataLoader();
    const data: Partial<ActivitySummary> = {
      userId: "123",
      activityId: 1,
      activityName: "Running",
      // Missing other required fields
    };
    expect(() =>
      loader.loadActivitySummary(data as ActivitySummary)
    ).toThrowError("Incomplete activity data");
  });
});
