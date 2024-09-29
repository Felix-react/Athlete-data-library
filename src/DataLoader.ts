import { ActivitySummary, Lap, Sample } from "./types";

export class DataLoader {
  // Load activity summary from raw data
  loadActivitySummary(data: any): ActivitySummary {
    // Simple validation logic (expand as needed)
    return data as ActivitySummary;
  }

  // Load laps from raw data
  loadLaps(data: any): Lap[] {
    return data as Lap[];
  }

  // Load samples from raw data
  loadSamples(data: any): Sample[] {
    return data as Sample[];
  }
}
