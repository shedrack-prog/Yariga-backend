import mongoose from 'mongoose';

const AgentSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'First Name is required'],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, 'First Name is required'],
      trim: true,
      text: true,
    },
    middlename: {
      type: String,
      required: [true, 'Please provide your middlename'],
      text: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'First Name is required'],
      trim: true,
    },
    username: {
      type: String,
      required: [true, 'First Name is required'],
      trim: true,
      unique: true,
    },
    country: {
      type: String,
      required: [true, 'Enter country'],
    },
    phone: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: [true, 'Enter city'],
    },

    password: {
      type: Number,
      required: [true, 'Phone number is required'],
    },
    picture: {
      type: String,
      default:
        'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
    },
    role: {
      type: String,
      enum: ['admin', 'agent'],
      default: 'agent',
    },

    cover: {
      type: String,
      default: '',
    },
    gender: {
      type: String,
      required: [true, 'Please select a gender'],
      trim: true,
    },
    bYear: {
      type: Number,
      trim: true,
      required: [true, 'Please provide birth month'],
    },
    bMonth: {
      type: Number,
      trim: true,
      required: [true, 'Please provide birth month'],
    },
    bDay: {
      type: Number,
      trim: true,
      required: [true, 'Please provide birth month'],
    },
    age: {
      type: Number,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    properties: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Property',
      },
    ],
    details: {
      agency: {
        type: String,
        trim: true,
      },
      agencyLicense: {
        type: Number,
        trim: true,
      },
      serviceArea: {
        type: String,
        trim: true,
      },
      taxNumber: {
        type: String,
        trim: true,
      },

      totalListings: {
        type: Number,
        default: 0,
      },
      propertySold: {
        type: Number,
        default: 0,
      },
      propertyRent: {
        type: Number,
        default: 0,
      },
      instagram: {
        type: String,
        trim: true,
      },

      facebook: {
        type: String,
        trim: true,
      },
      twitter: {
        type: String,
        trim: true,
      },
      bio: {
        type: String,
        trim: true,
      },
      postCode: {
        type: Number,
        trim: true,
      },
      agentId: {
        type: Number,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model('Agent', AgentSchema);
