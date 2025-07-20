const Template = require('../models/template');

const addTemplate = async (userId, templateData) => {
  try {
    const template = new Template({ ...templateData, userId });
    await template.save();
    return template;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getTemplates = async (userId) => {
  try {
    const templates = await Template.find({
      $or: [
        { userId: userId },
        { userId: "Common" }
      ]
    });
    return templates;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateTemplate = async (userId, templateId, updateData) => {
  try {
    const template = await Template.findOne({
      _id: templateId,
      $or: [
        { userId: userId },
        { userId: "Common" }
      ]
    });

    if (!template) throw new Error('Template not found or access denied');

    Object.assign(template, updateData);
    await template.save();
    return template;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteTemplate = async (userId, templateId) => {
  try {
    const template = await Template.findOne({
      _id: templateId,
      $or: [
        { userId: userId },
        { userId: "Common" }
      ]
    });

    if (!template) throw new Error('Template not found or access denied');

    await Template.deleteOne({ _id: templateId });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { addTemplate, getTemplates, updateTemplate, deleteTemplate };