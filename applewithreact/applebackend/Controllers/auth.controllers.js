import UserModal from "../Modals/User.Modal.js";
import bcrypt from 'bcrypt';

export const Login = (req, res) => {
    res.send('Login here')
}

export const Register = async (req, res) => {
    try {
        // res.send('hii register')
        // step1: register krne ko ky details apan lemge user se woh sab idhr aayega..req.body se lenge agar frontend connet hua toh udhr ka object data call krenge 
        // ** imp is yaha ke variable ka name aur frontend ke variable ka same hon ahi chaiye..

        const { userKaName, userKaEmail, userKaPassword } = req.body.userData;

        // agar ye 3 mai se ek bhi cheej mising aaya toh backend mai all field ka error dena hai 
        // ye if state ye bolra hi ki agar username nai hai aur 3no mai ek bhi nai hai toh yeh false return krega..

        if (!userKaName || !userKaEmail || !userKaPassword) return res.status(401).json({ success: false, message: 'all field required' })

        // saab frontend se data yaha taak le lega code apna abhi woh data woh database mongodb mai store krenge apan..
        // uske liye wapis schema ko call krenge..
        // yaha pe key joh hai woh usermodal ka schema se ayega aur value joh hai woh apna upa joh varaible define kiya hai woh jayegaa..

        const hashedPassword = await bcrypt.hash(userKaPassword, 10);
        console.log(hashedPassword, 'hashedPassword')

        const emailPresent = await UserModal.findOne({email: userKaEmail});

        if(emailPresent) return res.status(404).json({success: false, message: 'email id is already used'})

        console.log('emaillll')

        const user = new UserModal({
            name: userKaName,
            email: userKaEmail,
            password: hashedPassword,
        })

        // abhi data aur ye schema ki madat se mongo mai save krenge data ko..

        await user.save();

        return res.status(200).json({ success: true, message: "Registration Successfull" })


    } catch (error) {
        console.log(error(error))
        res.status(500).json({ success: false, message: "overall register error" })
    }
}