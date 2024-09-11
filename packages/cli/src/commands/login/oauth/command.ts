import { packageName } from '../../../util/pkg-name';
// import { Command } from '../../help';

export const loginCommand = {
  name: 'login',
  description: 'Authenticate the CLI.',
  arguments: [],
  options: [
    // TODO: Drop `--oauth` flag
    {
      name: 'oauth',
      description: 'Sign in using OAuth Device Authorization.',
      shorthand: null,
      type: Boolean,
      deprecated: false,
    },
  ],
  examples: [
    {
      name: 'Sign into the Vercel platform',
      value: `${packageName} login`,
    },
  ],
  // FIXME: Add "satisfies" support
} as const; // satisfies Command;
