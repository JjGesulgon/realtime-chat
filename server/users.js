const users = [];

const addUser = ({ id, name, room }) =>{

    // format the name and room by removing the whitespaces and change the uppercase letters to lowercase
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // check if there is existing user
    const existingUser = users.find((user) => user.room === room && user.name === name);
    
    if(existingUser){
        return {error: 'User exists'}
    }

    const user = { id, name, room };

    users.push(user);

    return { user }
}

const removeUser = (id) =>{
    // find user index
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

// get a specific user
const getUser = (id) => users.find((user) => user.id === id);

// list all users inside a room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };