const templateService = require('../services/template.services');

const addTemplate = async (req, res) => {
  try {
    const { style } = req.body;
    const userId = req.user._id;
    const newTemplate = { style, userId };

    const template = await templateService.addTemplate(userId, newTemplate);
    res.json({ success: true, data: template, message: 'Template added successfully' });
  } catch (err) {
    console.error("Failed to add template", err.message);
    res.status(500).json({ success: false, data: null, message: "Failed to add template", error: err.message });
  }
};

const getAllTemplates = async (req, res) => {
  try {
    const userId = req.user._id;
    const templates = await templateService.getTemplates(userId);

    res.json({ success: true, data: templates, message: "Templates retrieved successfully" });
  } catch (error) {
    console.error("Failed to retrieve templates", error.message);
    res.status(500).json({ success: false, data: null, message: "Failed to retrieve templates", error: error.message });
  }
};

const updateTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const { style } = req.body;

    if (!style) {
      return res.status(400).json({ success: false, data: null, message: "Style is required" });
    }

    const template = await templateService.updateTemplate(userId, id, { style });
    res.json({ success: true, data: template, message: "Template updated successfully" });
  } catch (err) {
    console.error("Failed to update template", err.message);
    res.status(500).json({ success: false, data: null, message: "Failed to update template", error: err.message });
  }
};

const deleteTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    await templateService.deleteTemplate(userId, id);
    res.json({ success: true, data: null, message: "Template deleted successfully" });
  } catch (err) {
    console.error("Failed to delete template", err.message);
    res.status(500).json({ success: false, data: null, message: "Failed to delete template", error: err.message });
  }
};

module.exports = { addTemplate, getAllTemplates, updateTemplate, deleteTemplate };