import Api from '../utils/api';

class ProfileService {
    static postProfile(data) {
        return Api.post('/posts', data)
    }
}

export default ProfileService;