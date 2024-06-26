import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const result = {};

  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();
    result.photo = photoResponse;
    result.user = userResponse;
  } catch (error) {
    result.photo = null;
    result.user = null;
  }

  return result;
}
