import {Provider} from '@loopback/core';
export class PreviousPermissions implements Provider<string[] | null> {
  value(): string[] | null {
    return null;
  }
}
