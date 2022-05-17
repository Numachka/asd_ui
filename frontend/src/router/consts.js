const serverConstants = {
    protocol: 'http://',
    front: {
        hostname: 'localhost:',
        port: '8080'
    },
    back: {
        hostname: 'localhost:',
        port: '8081',
    },
    appRoot: '/asdui',
}

const postConstants = {
    login: '/login', /* When posting login information */
    createUser: '/register/details/create-user', /* When posting the user information form */
    calculateUI: '/register/magic/calculate-ui', /* When answering the questions while registering */
    saveUI: '/settings/user-interface', /* When editing the UI */
    saveImage: '/settings/save-image', /* When editing the UI with new image */
}

const getConstants = {
    checkUsername: '/register/introduction/email-check/{username}', /* When entering email on register */
    ui: '/settings/user-interface/{id}' /* When getting visual or auditory card*/
}

const baseURL = serverConstants.protocol + serverConstants.back.hostname
    + serverConstants.back.port + serverConstants.appRoot;

export {baseURL, postConstants, getConstants}
