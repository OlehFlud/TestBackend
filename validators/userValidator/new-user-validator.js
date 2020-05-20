module.exports = userObject => {
    const {username, email, password} = userObject;

    if (!username  || !email || !password ) {
        throw new Error('userMiddleware object is not valid')
    }

};
