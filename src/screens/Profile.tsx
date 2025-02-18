import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { mockApi } from "../apiFolder/mockApi";

const Profile = ({ route, navigation }: any) => {
    const { userId } = route.params;
    const [user, setUser] = useState<any>(null);
    const [allUsers, setAllUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const userData = await mockApi.getUser(userId);
            const allUsersData = await mockApi.getAllUsers();
            setUser(userData);
            setAllUsers(allUsersData);
        };
        fetchData();
    }, [userId]);

    const handleAddFriend = async (friendId: string) => {
        await mockApi.addFriend(userId, friendId);
        const updatedUser = await mockApi.getUser(userId);
        setUser(updatedUser);
    };

    return (
        <View style={styles.container}>
            {/* Profile Info */}
            <View style={styles.profileCard}>
                <Image source={{ uri: user?.avatar }} style={styles.avatar} />
                <Text style={styles.profileName}>{user?.name}</Text>
                <Text style={styles.profileBio}>{user?.bio}</Text>
            </View>

            {/* Friends List */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Friends: {user?.name}</Text>
                <FlatList
                    data={user?.friends}
                    renderItem={({ item }) => <Text style={styles.friendItem}>{item}</Text>}
                    keyExtractor={(item) => item}
                />
            </View>

            {/* All Users List */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>All Users: {user?.name}</Text>
                <FlatList
                    data={allUsers}
                    renderItem={({ item }) => (
                        <View style={styles.userCard}>
                            <Image source={{ uri: item.avatar }} style={styles.userAvatar} />
                            <Text style={styles.userName}>{item.name}</Text>
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={() => handleAddFriend(item.id)}
                            >
                                <Text style={styles.addButtonText}>Add Friend</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    profileCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginBottom: 20,
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    profileBio: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginTop: 5,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    friendItem: {
        fontSize: 16,
        color: '#555',
        paddingVertical: 5,
    },
    userCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    userName: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
        flex: 1,
    },
    addButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: '500',
    },
});
