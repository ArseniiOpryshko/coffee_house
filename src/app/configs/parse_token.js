import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const parse_token = () => {
    const token = Cookies.get('token');
    const decodedToken = jwt.decode(token);
    return decodedToken;
}
  
export default parse_token;