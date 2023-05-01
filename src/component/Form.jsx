import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Form() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn mx-auto d-grid gap-2 col-6" onClick={handleShow}>
        Confirmar Asistencia
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8iZOhtJ-iQZtFzF_SbPYL6VCXOg1hjvs5wJ9qIty51EnBcg/viewform?embedded=true" height="1464" width="100%">Cargando…</iframe>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Form;