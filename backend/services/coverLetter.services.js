const CoverLetter = require('../models/CoverLetter');

const addCoverLetter = async (userId, coverLetterData) => {
  try {
    const coverLetter = new CoverLetter({ ...coverLetterData, userId });
    await coverLetter.save();
    return coverLetter;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getCoverLetters = async (userId) => {
  try {
    const coverLetters = await CoverLetter.find({
      $or: [
        { userId: userId },
        { userId: "Common" }
      ]
    });
    return coverLetters;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateCoverLetter = async (userId, coverLetterId, updateData) => {
  try {
    const coverLetter = await CoverLetter.findOne({
      _id: coverLetterId,
      $or: [
        { userId: userId },
        { userId: "Common" }
      ]
    });

    if (!coverLetter) throw new Error('Cover letter not found or access denied');

    Object.assign(coverLetter, updateData);
    await coverLetter.save();
    return coverLetter;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteCoverLetter = async (userId, coverLetterId) => {
  try {
    const coverLetter = await CoverLetter.findOne({
      _id: coverLetterId,
      $or: [
        { userId: userId },
        { userId: "Common" }
      ]
    });

    if (!coverLetter) throw new Error('Cover letter not found or access denied');

    await CoverLetter.deleteOne({ _id: coverLetterId });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { addCoverLetter, getCoverLetters, updateCoverLetter, deleteCoverLetter };