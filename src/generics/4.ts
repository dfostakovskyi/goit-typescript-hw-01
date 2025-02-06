type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User>>(data: T): User {
  // Оновлення користувача
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...defaultUser, ...data };
}

const updatedUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
