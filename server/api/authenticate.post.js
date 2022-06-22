import jwt from 'jsonwebtoken';
import User from '~~/server/models/User';

export default defineEventHandler(async (event) => {
  event.res.jsonResponse.context = event.context.params;

  const { email, password } = await useBody(event);
  try {
    console.log(email);
    console.log(password);
    const user = await User.findOne({
      email,
      password
    });
    console.log(user);
    if (!user) {
      console.log('alo');
      event.res.jsonResponse.error = {
        message: 'Invalid username or password'
      };
    } else {
      const token = jwt.sign({ id: user._id }, 'secretkey');
      event.res.jsonResponse.data = {
        items: [token]
      };
    }
  } catch (err) {
    event.res.jsonResponse.error = {
      message: err
    };
  }
  return event.res.jsonResponse;
});
