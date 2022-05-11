import {defineStore, acceptHMRUpdate} from 'pinia'
import {hashPassword} from "@/utils/utils";
import {baseURL, postConstants, getConstants} from "@/router/consts";

export const useAsduiStore = defineStore({
    id: 'asdui',
    state: () => ({
        activeUser:
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
                    card: [
                        {
                            backgroundColor: '',
                            image: {
                                url: '',
                                size: ''
                            },
                            button: {
                                backgroundColor: '',
                                size: '',
                                content: '',
                                contentColor: '',
                                contentSize: '',
                                action: ''
                            }
                        }
                    ]
                },
                userSettings: {
                    isActive: false
                }
            }

    }),
    getters: {
        users: (state) => {
            // state.user =
        }
    },
    actions: {
        loginUser(email, password) {
            let isSuccessful = false;
            const url = baseURL + postConstants.login;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    password: hashPassword(password)
                })
            })
                .then(data => {
                    return data.json()
                })
                .then(response => {
                    console.log(response)
                    if (response) {
                        this.spreadUserData(response);
                        isSuccessful = true;
                    }
                })
                .catch(error => {
                    console.log(error)
                })

            function spreadUserData(data) {
                storeUserInformation(data.user)
                storeUserInterface(data.userInterface)
                storeUserSettings(data.userSettings)

                function storeUserInformation(userInformation) {
                    console.log(userInformation)

                    let user = this.activeUser.user;
                    user.userID = userInformation.id
                    user.firstName = userInformation.firstName
                    user.lastName = userInformation.lastName
                    user.email = userInformation.email
                    user.phoneNumber = userInformation.phoneNumber
                }

                function storeUserInterface(userInterface) {
                    console.log(userInterface)

                    let cards = userInterface.card
                    for (let card of cards) {
                        this.activeUser.card.backgroundColor = card.backgroundColor;

                        let cardImage = this.activeUser.card.image;
                        cardImage.url = card.image.url;
                        cardImage.size = card.image.size;

                        let cardButton = this.activeUser.card.button;
                        cardButton.backgroundColor = card.button.backgroundColor;
                        cardButton.content = card.button.content;
                        cardButton.contentColor = card.button.contentColor;
                        cardButton.contentSize = card.button.contentSize;
                        cardButton.contentAction = card.button.contentAction;
                    }
                }

                function storeUserSettings(userSetting) {
                    console.log(userSetting)

                    let settings = this.activeUser.userSettings;
                    settings.isActive = userSetting.isActive;
                }
            }
            return isSuccessful;
        },
        checkUsername(email) {
            let isSuccessful = false;
            const url = baseURL + getConstants.checkUsername.replace('{username}', email.value);
            fetch(url, {
                method: 'GET',
            })
                .then(data => {
                    return data.json()
                })
                .then(response => {
                    console.log(response)
                    if (response === false) {
                        isSuccessful = true;
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            return isSuccessful;
        },
        registerUser(userDetails) {
            const url = baseURL + postConstants.createUser;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: userDetails.firstName,
                    lastName: userDetails.lastName,
                    email: userDetails.email,
                    password: userDetails.password,
                    phoneNumber: userDetails.phoneNumber,
                })
            })
                .then(data => {
                    return data.json();
                })
                .then(response => {
                    console.log(response)
                    return response.id;
                })
                .catch(error => {
                    console.log(error);
                    return -1;
                })
        },
        calculateUIScore(answers) {
            let scores = {
                visualScore: '',
                auditoryScore: '',
                tactileScore: ''
            }
            const url = baseURL + postConstants.calculateUI;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    q1: answers.q1,
                    q2: answers.q2,
                    q3: answers.q3,
                    q4: answers.q4,
                    q5: answers.q5,
                    q6: answers.q6,
                    q7: answers.q7,
                    q8: answers.q8,
                    q9: answers.q9,
                    q10: answers.q10,
                    q11: answers.q11,
                    q12: answers.q12,
                    q13: answers.q13,
                    q14: answers.q14,
                    q15: answers.q15,
                })
            })
                .then(data => {
                    return data.json();
                })
                .then(response => {
                    console.log(response);
                    scores.visualScore = response.visualScore;
                    scores.auditoryScore = response.auditoryScore;
                    scores.tactileScore = response.auditoryScore;
                })
                .catch(error => {
                    console.log(error);
                })
            return scores;
    }
}
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAsduiStore, import.meta.hot))
}
