import {useState, useEffect} from "react";
import  { ErrorsType} from "../../libs/types";
import {checkErrors, getErrors} from "../../libs/helpers";
import {Modal, Button} from "flowbite-react";

type Props = {
    errors: ErrorsType
}
export default ({errors} : Props) => {

    const [show, setShow] = useState<boolean>(true)

    useEffect(() => {
        if( checkErrors(errors) ){
            setShow(true)
        }else{ 
            setShow(false)
        }
    },[errors])

    return  <Modal
        show={show}
    >
    <Modal.Header>
      <div className="bg-red-100 w-12 h-12 rounded-full text-red-600 flex items-center justify-center">
        <svg className="w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        </div>
    </Modal.Header>
    <Modal.Body>
        <div className="text-red-500 px-4">
            <ul className="list-disc">
                {
                    getErrors(errors).map( error => 
                          <li> {error} </li>
                    )
                }
            </ul> 
        </div>
    </Modal.Body>
    <Modal.Footer>
      <Button
        color="gray"
        onClick={() => setShow(false)}>
            OK
      </Button>
    </Modal.Footer>
  </Modal>
}