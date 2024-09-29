import { ActivitySummary } from "./types";

export class DataLoader {
  loadActivitySummary(data: ActivitySummary): ActivitySummary {
    if (!data || !data.userId || !data.activityId || !data.activityName) {
      throw new Error("Invalid activity data");
    }

    // Validate partial data, ensuring all required fields are present
    const requiredFields = [
      "userId",
      "activityId",
      "activityName",
      "durationInSeconds",
      "startTimeInSeconds",
      "startTimeOffsetInSeconds",
      "activityType",
      "averageHeartRateInBeatsPerMinute",
      "activeKilocalories",
      "deviceName",
      "maxHeartRateInBeatsPerMinute",
    ];

    for (const field of requiredFields) {
      if (
        data[field as keyof ActivitySummary] === null ||
        data[field as keyof ActivitySummary] === undefined
      ) {
        throw new Error("Incomplete activity data");
      }
    }

    // Return the data as is if all validations pass
    return data;
  }
}
