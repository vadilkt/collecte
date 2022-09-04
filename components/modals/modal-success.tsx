
import {Modal, Button} from "flowbite-react";
import {useState, useEffect } from "react";

type Props = {
    success: string
    setSuccess :any
}
export default ({success, setSuccess} : Props) => {

    const [show, setShow] = useState<boolean>(true)

    useEffect(() => {
        if( success != ""){
            setShow(true)
        }else{ 
            setShow(false)
        }
    },[success])

    const close = () => {
        setSuccess("");
        setShow(false)
       
    }

    return  <Modal
        show={show}
        onClose={close}
    >
    <Modal.Header>
      <div className="bg-green-100 w-12 h-12 rounded-full text-green-600 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
    </Modal.Header>
    <Modal.Body>
        <div className="text-green-500 px-4">
           {success}
        </div>
    </Modal.Body>
    <Modal.Footer>
      <Button
        color="gray"
        onClick={close}>
            OK
      </Button>
    </Modal.Footer>
  </Modal>
}