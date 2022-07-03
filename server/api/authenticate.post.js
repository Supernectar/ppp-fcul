import jwt from 'jsonwebtoken';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  const { email, password } = await useBody(event);
  try {
    const user = await User.findOne({
      email,
      password
    });
    if (!user) {
      return {
        message: 'Invalid username or password'
      };
    } else {
      const token = jwt.sign({ id: user._id }, 'secretkey');
      return token;
    }
  } catch (err) {
    console.log(err);
    return { error: err };
  }
});
