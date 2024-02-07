import { useState } from 'react'
import Modal from '../Modal'
import ContentBox2 from '../blockExport/containerRed/ContentRedBox2'


export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (


    <div>

      <nav className="navBar">
        <button className="buttonNav" id="addImage">
          Add image
        </button>

        <button className="buttonNav" id="addInput">
          Add input
        </button>

        <button className="buttonNav" id="addText">
          Add text
        </button>

        <button className="buttonNav" id="addButton">
          Add button
        </button>

        <div>
          <button onClick={openModal}>Ouvrir la modal</button>
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <ContentBox2 />
          </Modal>
        </div>

      </nav>

    </div>
  )
}
