import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
const useAuth = () => {
    const auth = useContext(AuthContext);

    // if (!auth) {
    //     throw new Error('useAuth must be used inside children of AuthProvider only')
    // }
    return auth;
}

export default useAuth;