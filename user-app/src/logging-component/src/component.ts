import {Component, ProviderMap} from '@loopback/core';
import {LoggingBindings, UserConfigurationBindings} from './keys';
import {AfterPermissions, PreviousPermissions} from './providers';
import {LoggingProvider} from './providers/logging.provider';

export class LoggingComponentComponent implements Component {
  constructor() {}

  providers?: ProviderMap = {
    [LoggingBindings.loggingProvider.key]: LoggingProvider,
    [UserConfigurationBindings.userAfterPermissions.key]: AfterPermissions,
    [UserConfigurationBindings.userPreviosPermissions.key]: PreviousPermissions,
  };
}
