import StorageUtils from '../storage';

const isUserLoggedIn = () => !!StorageUtils.getItem('USER_SECRET');
const userNeedsVerify = () => !!StorageUtils.getItem('USER_SESSION_VERIFY');

const UserUtils = {
  isUserLoggedIn,
  userNeedsVerify,
};

export default UserUtils;
