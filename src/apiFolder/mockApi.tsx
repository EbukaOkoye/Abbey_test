
type User = {
    id: string;
    email: string;
    password: string;
    name: string;
    friends: string[]; // Array of user IDs
};

let users: User[] = [];

export const mockApi = {
    // Register a new user
    register: async (email: string, password: string, name: string) => {
        const user = { id: String(users.length + 1), email, password, name, friends: [] };
        users.push(user);
        return user;
    },

    // Login a user
    login: async (email: string, password: string) => {
        const user = users.find((u) => u.email === email && u.password === password);
        if (!user) throw new Error("Invalid credentials");
        return user;
    },

    // Get user details
    getUser: async (id: string) => {
        const user = users.find((u) => u.id === id);
        if (!user) throw new Error("User not found");
        return user;
    },

    // Add a friend
    addFriend: async (userId: string, friendId: string) => {
        const user = users.find((u) => u.id === userId);
        const friend = users.find((u) => u.id === friendId);
        if (!user || !friend) throw new Error("User or friend not found");
        user.friends.push(friendId);
        return user;
    },

    // Get all users (for friend search)
    getAllUsers: async () => {
        return users;
    },
};