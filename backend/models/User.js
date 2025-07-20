const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userJobSchema = require('./UserJob.schema');
const workExperienceSchema = require('./WorkExperience.schema');

const userSchema = new mongoose.Schema({
  // fields for user Authentication
  identifier: { required: true, type: String, unique: true },
  identifierType: { type: String, enum: ['email', 'phone'], required: true },
  tempIdentifier: { type: String },
  tempIdentifierType: { type: String, enum: ['email', 'phone'] },
  password: { type: String, required: true, minlength: 6 },
  otp: { type: String },
  otpExpires: { type: Date },
  isVerified: { type: Boolean, default: false },
  remember: { type: Boolean, default: false },
  resetToken: { type: String, index: true },
  resetTokenExpires: { type: Date },
  
  // Fields for uesr profile
  name: { type: String, required: true },
  profilePicture: { type: String },
  location: {
    city: { type: String },
    state: { type: String },
    country: { type: String }
  },
  mobile: {
    countryCode: { type: String, default: '+91' },
    number: { type: String }
  },
  email: { type: String },

  jobSearchStatus: {
    type: String,
    enum: [
      'Actively looking',
      'Not looking but open to offers',
      'Not looking and closed to offers'
    ]
  },
  bio: { type: String },
  skills: [{ type: String }],
  roles: [{ type: String }],
  jobTypes: { types: [{ type: String }], levels: [{ type: String }]},
  expectedSalary: { min: { type: Number }, max: { type: Number } },
  jobLocations: [{ type: String }],
  workExperiences: [workExperienceSchema],

  // field for job tracking
  jobs: [userJobSchema],
  // these blocks will be displayed in the tracking page
  jobStatuses: [{type: String, default: ['Saved', 'Applied', 'Interview', 'Offer', 'Rejected', 'Accepted']}]
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
