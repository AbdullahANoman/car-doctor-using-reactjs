import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const handleGoogle = () =>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user)
        }).catch(error=>console.log(error.message))
    }
    return (
        <div className="text-center mt-5">
            <button onClick={handleGoogle} className="bg-red-500 text-white p-4 font-bold rounded-xl">Google</button>
        </div>
    );
};

export default SocialLogin;