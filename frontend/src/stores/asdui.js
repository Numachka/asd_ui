import {defineStore, acceptHMRUpdate} from 'pinia'

export const asduiStore = defineStore({
    id: 'asdui',
    state: () => ({
        activeUser: [
            {
                user: {
                    userID: 0,
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    phoneNumber: '',
                },
                userInterface: {
                    card: [{
                        header: {
                            size: '',
                            content: ''
                        },
                        image: {
                            url: '',
                            height: '',
                            width: ''
                        },
                        button: {
                            action: '',
                            color: '',
                            height: '',
                            width: '',
                            header: {
                                size: '',
                                content: ''
                            }
                        }
                    }]
                },
                userSettings: {
                    isActive: 0
                }
            }
        ],
    }),
    getters: {
        users: (state) => {
            // state.user =
        }
    },
    actions: {
        storeUser(data) {
            this.storeUserInformation(data.user)
            this.storeUserInterface(data.userInterface)
            this.storeUserSettings(data.userSettings)
        },
        storeUserInformation(userInformation) {
            console.log(userInformation)
        },
        storeUserInterface(userInterface) {
            console.log(userInterface)
        },
        storeUserSettings(user) {
            console.log(user)
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(asduiStore, import.meta.hot))
}
