const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
};

const createCookie = (res, name, value, remember) => {
  res.cookie(name, value, {
    ...COOKIE_OPTIONS,
    maxAge: remember ? 7 * 24 * 60 * 60 * 1000 : undefined,
  });
}
const clearCookie = (res, name) => res.clearCookie(name, COOKIE_OPTIONS)

module.exports = { createCookie, clearCookie, COOKIE_OPTIONS };
