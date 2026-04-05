import { Button } from "../components/Button"
import { Input } from "../components/Input"

export function Signup() {
    return <div className="h-screen w-screen bg-gray-200 flex border justify-center items-center">
        <div className="bg-white border border-gray-300 rounded p-4 min-w-48">
             <Input placeholder="Username" />
             <Input placeholder="Password" />
            <div className="flex justify-center">
             <Button loading={true} variant="primary" text="Signup" fullWidth={true}></Button>
             </div>
        </div>
    </div>
}