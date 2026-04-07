import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signup() {
        const usernameRef = useRef<HTMLInputElement>();
        const passwordRef = useRef<HTMLInputElement>();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "api/v1/signup", {
            data: {
                username,
                password
            }
        })
        alert("You have signed up!")
    }

    return <div className="h-screen w-screen bg-gray-200 flex border justify-center items-center">
        <div className="bg-white border border-gray-300 rounded-xl p-4 min-w-48">
             <Input ref={usernameRef} placeholder="Username" />
             <Input ref={passwordRef} placeholder="Password" />
            <div className="flex justify-center pt-4">
             <Button onClick={signup} loading={false} variant="primary" text="Signup" fullWidth={true}></Button>
             </div>
        </div>
    </div>
}