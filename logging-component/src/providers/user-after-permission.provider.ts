import {Provider} from '@loopback/core';
export class AfterPermissions implements Provider<string[] | null> {
  value(): string[] | null {
    return null;
  }
}
