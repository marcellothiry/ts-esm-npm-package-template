import { describe, expect, test } from 'vitest';
import { sayHelloFromTemplate, User } from '../helloFromTemplate.js';

describe('TS-ESM NPM Package Template', () => {
  test('hello from template', () => {
    const user: User = {
      name: 'Marcello',
    };
    const expected = 'Hello Marcello! This is a message from Template';
    const actual = sayHelloFromTemplate(user);
    expect(actual).eq(expected);
  });
});
