import { ActivitySummary, Lap, Sample } from "./types";

export class DataProcessor {
  // Combine activity summary, laps, and samples into one unified structure
  static consolidateData(
    summary: ActivitySummary,
    laps: Lap[],
    samples: Sample[]
  ): any {
    // Construct the unified JSON object
    const consolidatedData = {
      activityOverview: {
        userId: summary.userId,
        activityType: summary.activityType,
        duration: summary.durationInSeconds,
        device: summary.deviceName,
        maxHeartRate: summary.maxHeartRateInBeatsPerMinute,
      },
      laps: laps.map((lap, index) => ({
        startTime: lap.startTimeInSeconds,
        distance: lap.totalDistanceInMeters,
        duration: lap.timerDurationInSeconds,
        heartRateSamples: samples
          .filter((sample) => sample.sampleType === "2")
          .map((sample, idx) => ({
            sampleIndex: idx,
            heartRate: sample.data.split(",").map(Number), // Parse CSV string into array of numbers
          })),
      })),
    };

    return consolidatedData;
  }
}
