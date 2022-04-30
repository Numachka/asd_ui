import {defineStore, acceptHMRUpdate} from 'pinia'

export const asduiStore = defineStore({
    id: 'user',
    state: () => ({
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
    }),
    getters: {},
    actions: {}
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(asduiStore, import.meta.hot))
}
