import React, {useState} from "react";
import {Button,Modal} from "react-bootstrap";
import FileViewer from "react-file-viewer-extended";

import file from "../file/HyunBae.resume_new_KOREAN_2021.pdf";
const type = "pdf";



export const PDF_Viewer = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(file);
    const onError = e => {
          console.log(e, "error in file-viewer");
        };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
            이력서 PDF 파일 보기
          </Button>

          <Modal show={show} size="lg" onHide={handleClose} animation={false} >
            <Modal.Header closeButton>
              <Modal.Title>Hyunbae resume</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FileViewer fileType={type} filePath={file} onError={onError}/>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
          </Modal>
        </>
    );
}

export default PDF_Viewer;