import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (pass.length < 4) {
          new Error('Password must be at least 4 characters!')
          return false
        }
      },
    },
  },
  { timestamps: true }
)

UserSchema.post('validate', function (user) {
  const notHashedPassword = user.password
  const salt = bcrypt.genSaltSync(10)
  user.password = bcrypt.hashSync(notHashedPassword, salt)
})

export default mongoose?.models?.User || mongoose.model('User', UserSchema)
