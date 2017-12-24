import { observable, action } from 'mobx';

class UserStore {

    @observable name="jason";

    @action pullUser() {
        this.name = ""
    }
}

export default new UserStore();
