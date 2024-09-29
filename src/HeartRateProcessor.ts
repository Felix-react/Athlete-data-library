export class HeartRateProcessor {
  static cleanAndInterpolate(samples: number[]): number[] {
    return samples.filter(
      (value) => value !== null && value >= 40 && value <= 200
    );
  }

  static predictNextMedian(samples: number[]): number {
    const sortedSamples = samples.sort((a, b) => a - b);
    const mid = Math.floor(sortedSamples.length / 2);
    return sortedSamples.length % 2 !== 0
      ? sortedSamples[mid]
      : (sortedSamples[mid - 1] + sortedSamples[mid]) / 2;
  }
}
