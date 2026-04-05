import { Button } from "../components/Button"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModal"
import { useState } from "react"
import { Sidebar } from "../components/Sidebar"

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return <div>
    <Sidebar />
   <div className="p-4 ml-72 min-h-screen bg-gray-100 ">
    <CreateContentModal open ={modalOpen} onClose={() => {
      setModalOpen(false);
    }} />
    <div className="flex justify-end gap-4">
    <Button onClick={() => {
      setModalOpen(true)
    }}  variant="primary" text="Add Content"startIcon={<PlusIcon />}></Button>
    <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>
    </div>
    <div className="flex gap-4">
    <Card type = "twitter" link = "https://x.com/Cristiano/status/2040164040723353763?s=20" title="First tweet"/> 
    <Card type = "youtube" link = "https://youtu.be/0WNg57lEsfw?si=N1p-wQtgqWTbLC_e" title="First video"/> 
    </div>
    </div>
  </div>

}

export default Dashboard