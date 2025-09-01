import { Button } from '../components/Button'
import { PlusIcon } from '../icons/Plusicon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { useEffect, useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../components/config'

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen, refresh]);

  async function handleShare() {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/brain/share`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    // Backend returns { shareLink: "/api/v1/brain/abcd123" }
    const hash = response.data.shareLink.split("/").pop();
    const shareUrl = `http://localhost:5173/share/${hash}`;

    console.log("Share URL:", shareUrl);
    await navigator.clipboard.writeText(shareUrl);
    alert("Copied share URL to clipboard!");
  }

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-300">
        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

        <div className="flex justify-end gap-4">
          <Button
            onClick={() => setModalOpen(true)}
            startIcon={<PlusIcon />}
            variant="secondary"
            text="Add Content"
          />
          <Button
            onClick={handleShare}
            startIcon={<ShareIcon />}
            variant="primary"
            text="Share"
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }, idx) => (
            <Card key={idx} type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
