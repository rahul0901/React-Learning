import bcrypt from 'bcrypt';
import UserModals from '../Modals/User.Modals.js';
import jwt from 'jsonwebtoken';

export const Register = async (req, res) => {
    try {

        const { userKaName, userKaEmail, userKaPassword, userKaNumber } = req.body.userData;
        console.log(req.body.userData, 'req')

        if (!userKaName || !userKaEmail || !userKaPassword || !userKaNumber) {
            return res.status(404).json({ success: false, message: 'All fields required' })
        }

        const hashedpassword = await bcrypt.hash(userKaPassword, 10);

        const emailPresent = await UserModals.findOne({ email: userKaEmail });

        if (emailPresent) return res.status(404).json({ success: false, message: 'email id is already used' });

        const numberPresent = await UserModals.findOne({ number: userKaNumber });

        if (numberPresent) return res.status(404).json({ success: false, message: 'number is already registered' });

        const user = new UserModals({
            name: userKaName,
            email: userKaEmail,
            password: hashedpassword,
            number: userKaNumber
        });

        await user.save();

        return res.status(200).json({ success: true, message: 'Registeration Successfull!' })

    } catch (error) {
        return res.status(500).json({ success: false, message: 'Registeration error!' })
    }
    // res.send(' Hi from register..')
}

export const Login = async (req, res) => {
    try {

        const { userKaEmail, userKaPassword } = req.body.login;

        console.log(req.body.login, 'req')

        if (!userKaEmail || !userKaPassword) {
            return res.status(404).json({ success: false, message: 'All fields required..' })
        }

        const user = await UserModals.findOne({ email: userKaEmail })

        console.log('email checking..')

        if (!user) return res.status(404).json({ success: false, message: 'Email id not Found' })
        console.log('email not correct')

        const isPasswordCorrect = await bcrypt.compare(userKaPassword, user.password)

        if (!isPasswordCorrect) return res.status(404).json({ success: false, message: 'Password not Matched!' })
        console.log('password correct')

        const token = jwt.sign({ id: user._id }, process.env.JwtSecret);

        return res.status(200).json({ success: true, message: 'Login Successfull!', token, user: { id: user._id, name: user.name } })

    } catch (error) {
        return res.status(500).json({ success: false, message: 'Login error!' })
    }
}

export const getCurrentUser = async (req, res) => {
    try {

        // const { id } = req.body;
        const { token }  = req.body;

        // console.log(token)

        if(!token) return res.status(404).json({success:false, message:'token not found'})

        const { id } = await jwt.verify(token, process.env.JwtSecret);

        const user = await UserModals.findById(id);

        if (!user) return res.status(404).json({ success: false, message: 'user not found' })

        return res.status(200).json({ success: true, user: { id: user._id, name: user.name } })

    } catch (error) {
        return res.status(500).json({ success: false, message: 'CurrentUser Error!' })
    }
}