const domain = "https://pages-755ca-default-rtdb.firebaseio.com";

export async function getAllUsers() {
  const response = await fetch(`${domain}/users.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "could not fetch users");
  }

  const transformedUsers = [];

  for (const key in data) {
    const usersObj = {
      id: key,
      ...data[key],
    };

    transformedUsers.push(usersObj);
  }

  return transformedUsers;
}

export async function getSingleUser(userId) {
  const response = await fetch(`${domain}/users/${userId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "could not fetch user");
  }

  const loadedUser = {
    id: userId,
    ...data,
  };

  return loadedUser;
}

export async function addUser(userData) {
  const response = await fetch(`${domain}/users.json`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  if(!response.ok) {
	  throw new Error(data.message || 'Could not create user');
  }

  return null;
}
