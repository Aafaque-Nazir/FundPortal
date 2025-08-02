export const generateReferralCode = (name) => {
  const random = Math.floor(Math.random() * 10000);
  return `${name?.split(' ')[0].toLowerCase()}-${random}`;
};
