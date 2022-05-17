import {defineStore, acceptHMRUpdate} from 'pinia'
import {hashPassword} from "@/utils/utils";
import {baseURL, postConstants, getConstants} from "@/router/consts";

export const useAsduiStore = defineStore({
    id: 'asdui',
    state: () => {
        return {
            user: {
                userID: -1,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phoneNumber: '',
            },
            userInterface: {
                cards: [
                    // example card object : {
                    //     card: {
                    //         id: '',
                    //         backgroundColor: '',
                    //     },
                    //     image: {
                    //         id: '',
                    //         url: '',
                    //         size: ''
                    //     },
                    //     button: {
                    //         id: '',
                    //         backgroundColor: '',
                    //         size: '',
                    //         content: '',
                    //         contentColor: '',
                    //         contentSize: '',
                    //         contentAction: ''
                    //     }
                    // }
                ]
            },
            userSettings: {
                isActive: false
            }
        }
    },
    getters: {
        getActiveUserInterface(state) {
            return state.userInterface;
        },
        getActiveUserSettings(state) {
            return state.userSettings;
        },
        getActiveUserDetails(state) {
            return state.user;
        }
    },
    actions: {
        async loginUser(email, password) {
            const response = await this.sendRequest(email, password)

            if (!response) {
                return false;
            } else {
                const activeUserState = this;
                spreadUserData(response);

                function spreadUserData(response) {
                    const userInformation = response.user;
                    const userInterface = response.userInterface;
                    const userSetting = response.userSettings;

                    let user = activeUserState.user;
                    user.userID = userInformation.id
                    user.firstName = userInformation.firstName
                    user.lastName = userInformation.lastName
                    user.email = userInformation.email
                    user.phoneNumber = userInformation.phoneNumber

                    let card = activeUserState.userInterface.cards;
                    userInterface.forEach(uiElement => {
                        const newCard = {
                            card: {
                                id: uiElement.card.id,
                                backgroundColor: uiElement.card.backgroundColor,
                            },
                            image: {
                                id: uiElement.image.id,
                                url: userInformation.id + '-' + userInformation.firstName + userInformation.lastName + '/' + uiElement.image.url,
                                size: uiElement.image.size
                            },
                            button: {
                                id: uiElement.button.id,
                                backgroundColor: uiElement.button.backgroundColor,
                                size: uiElement.button.size,
                                content: uiElement.button.content,
                                contentColor: uiElement.button.contentColor,
                                contentSize: uiElement.button.contentSize,
                                contentAction: uiElement.button.contentAction
                            }
                        }
                        card.push(newCard);
                    })

                    let settings = activeUserState.userSettings;
                    settings.isActive = userSetting.isActive;
                }
                this.saveLocalState();
                return true;
            }
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
        async registerUser(userDetails) {
            const response = await this.postUserData(userDetails);
            if (!response) {
                return -1;
            } else {
                this.user.userID = response.id;
                this.userSettings.isActive = true;
                return response.id;
            }

        },
        async calculateUIScore(answers) {
            let scores = {
                visualScore: '',
                auditoryScore: '',
                tactileScore: ''
            }
            const response = await this.getUIScore(answers);
            if (response) {
                scores.visualScore = response.visualScore;
                scores.auditoryScore = response.auditoryScore;
                scores.tactileScore = response.auditoryScore;
                return scores;
            } else {
                return null;
            }
        },
        async setCardByScore(type) {
            const response = await this.getFirstCard(type)

            if (!response) {
                return false;
            } else {
                console.log(response);
                let tempCard = {
                    card: {
                        id: response.card.id,
                        backgroundColor: response.card.backgroundColor,
                    },
                    image: {
                        id: response.image.id,
                        url: response.image.url,
                        size: response.image.size
                    },
                    button: {
                        id: response.button.id,
                        backgroundColor: response.button.backgroundColor,
                        size: response.button.size,
                        content: response.button.content,
                        contentColor: response.button.contentColor,
                        contentSize: response.button.contentSize,
                        contentAction: response.button.contentAction
                    }
                }
                this.userInterface.cards.push(tempCard);
                return response;
            }
        },
        async saveCards(cards) {
            const activeUserState = this;
            cards.forEach(card => {
                const tempCard = {
                    card: {
                        id: card.cardId,
                        backgroundColor: card.cardBackgroundColor,
                    },
                    image: {
                        id: card.imageId,
                        url: card.imageUrl,
                        size: card.imageSize,
                    },
                    button: {
                        id: card.buttonId,
                        backgroundColor: card.buttonBackgroundColor,
                        size: card.buttonSize,
                        content: card.buttonContent,
                        contentColor: card.buttonContentColor,
                        contentSize: card.buttonContentSize,
                        contentAction: card.buttonAction
                    }
                }
                activeUserState.userInterface.cards.push(tempCard);
            })
            await this.sendCardRequest();
        },
        async saveImage(file) {
            const formData = new FormData();
            formData.append('myFile', file);
            await this.saveFile(formData);
        },
        async sendRequest(email, password) {
            const url = baseURL + postConstants.login;

            return fetch(url, {
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
                    return response
                })
                .catch(error => {
                    console.log(error)
                    return false;
                })
        },
        async sendCardRequest() {
            const cards = this.userInterface.cards;
            cards.forEach(card => card.user = this.user.userID);
            const url = baseURL + postConstants.saveUI;

            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cards)
            })
                .then(data => {
                    return data.json()
                })
                .then(response => {
                    console.log(response);
                    return response
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async postUserData(userDetails) {
            const url = baseURL + postConstants.createUser;
            return fetch(url, {
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
                    return data.json()
                })
                .then(json => {
                    return json
                })
                .catch(error => console.log(error));

        },
        async getFirstCard(type) {
            let url;
            switch (type) {
                case 'visual':
                    url = baseURL + getConstants.ui.replace('{id}', '1');
                    break;
                case 'auditory':
                    url = baseURL + getConstants.ui.replace('{id}', '2');
                    break;
                default:
                    return null;
            }
            return fetch(url, {
                method: 'GET'
            })
                .then(data => {
                    return data.json();
                })
                .then(response => {
                    console.log(response);
                    return response;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async getUIScore(answers) {
            const url = baseURL + postConstants.calculateUI;
            return fetch(url, {
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
                    return response
                })
                .catch(error => {
                    console.log(error);
                });
        },
        async saveFile(formData) {
            const url = baseURL + postConstants.saveImage;
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    return data.path
                })
                .catch(error => {
                    console.error(error)
                })
        },
        saveLocalState() {
            window.localStorage.setItem('asduiState', this.state);
        },
        loadLocalState() {
            this.state = window.localStorage.getItem('asduiState');
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAsduiStore, import.meta.hot))
}
