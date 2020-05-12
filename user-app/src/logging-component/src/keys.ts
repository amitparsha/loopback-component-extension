import {BindingKey} from '@loopback/context';
import {LoggingProvider} from './providers/logging.provider';
import {UserPermissions} from './types';
export namespace UserConfigurationBindings {
  export const userPreviosPermissions = BindingKey.create<UserPermissions>(
    'userPreviousPermissions',
  );
  export const userAfterPermissions = BindingKey.create<UserPermissions>(
    'userAfterPermissions',
  );
}
export namespace LoggingBindings {
  export const loggingProvider = BindingKey.create<LoggingProvider>(
    'loggingProvider',
  );
}
