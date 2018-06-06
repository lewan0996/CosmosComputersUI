import * as React from 'react';
import { Modal } from 'semantic-ui-react';
import PartForm from './PartForm';

const PartFormModal = (props) => (
    <Modal
        open={props.open}
        onClose={props.onClose}
    >
        <PartForm
            columns={props.columns}
            element={props.element}
            onSubmit={props.onSubmit}
            onPropertyChange={props.onPropertyChange}
        />
    </Modal>
);

export default PartFormModal;