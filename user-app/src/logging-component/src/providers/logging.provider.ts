import {Binding, Context, inject, Provider} from '@loopback/core';
import {UserConfigurationBindings} from '../keys';
import {UserPermissions} from '../types';

export interface Logging {
  (method: string, ctx: Context): void;
}

export class LoggingProvider implements Provider<Logging> {
  constructor(
    @inject.binding(UserConfigurationBindings.userPreviosPermissions)
    private userPreviousPermissions: Binding<UserPermissions>,
    @inject.binding(UserConfigurationBindings.userAfterPermissions)
    private userAfterPermissions: Binding<UserPermissions>,
  ) {}

  value(): Logging {
    return (method: string, ctx: Context) => this.logging(method, ctx);
  }
  logging(method: string, ctx: Context): void {
    const previousPermissions = this.userPreviousPermissions.getValue(ctx);
    const afterPermissions = this.userAfterPermissions.getValue(ctx);
    console.log(method);
    if (previousPermissions) {
      console.log('Previous Permissions: ' + previousPermissions);
    }
    if (afterPermissions) {
      console.log('Updated Permissions: ' + afterPermissions);
    }
    this.destructValues();
  }
  destructValues() {
    this.userAfterPermissions.to(null);
    this.userPreviousPermissions.to(null);
  }
}
