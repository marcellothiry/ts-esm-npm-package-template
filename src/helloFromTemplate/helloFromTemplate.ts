export type User = {
  name: string;
};

export const sayHelloFromTemplate = (user: User): string =>
  `Hello ${user.name}! This is a message from Template`;
