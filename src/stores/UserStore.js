import { observable, action, computed, autorun } from 'mobx'
import { resolve } from 'path';

type UserCredentialsT = {
    email: string,
    password: string
}

const actions = (self) => {
    const applyAuthValues = action((credentials: UserCredentialsT) => {
        self.name = credentials.email.split('@')[0]
        self.email = credentials.email
        
        credentials.modules.forEach(module => self.modules.set(module.title, module))
    })

    return {
        applyAuthValues
    }
}

export default class UserStore {
    @observable name: string = ''
    @observable email: string = ''
    @observable authenticated: string = false
    @observable modules: Map = new Map()
    actions = actions(this)

    authenticate = (credentials: UserCredentialsT) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.actions.applyAuthValues(credentials)
                resolve({ done: true, error: '' })
            })
        })
    }

    
}

