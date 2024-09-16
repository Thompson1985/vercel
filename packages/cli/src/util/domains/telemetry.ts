import { TelemetryClient } from '../telemetry';

export class DomainsTelemetryClient extends TelemetryClient {
  trackArgumentDomain() {
    this.trackCliArgument('domain', '[SECRET]');
  }

  trackFlagForce(passed: boolean | undefined) {
    this.trackCliFlag('force', passed);
  }
}
