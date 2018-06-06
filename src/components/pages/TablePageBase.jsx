import * as React from 'react';
import PartsTable from '../PartsTable';
import ApiServices from '../../services/ApiServices';
import PartFormModal from '../PartFormModal';

class TablePageBase extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.pluralTypeName = this.__proto__.constructor.name;
        this.apiServices = new ApiServices();
    }

    getAll() {
        this.apiServices.getAll(this.pluralTypeName)
            .then(json => {
                this.setState({ data: json });
            });
    }

    componentDidMount() {
        this.getAll();
    }

    delete(id) {
        this.setState({ data: null });
        this.apiServices.delete(id, this.pluralTypeName).then(() => {
            this.getAll();
        });
    }

    add(newElement) {
        this.setState({ data: null });
        this.apiServices.post(this.pluralTypeName, newElement).then(() => {
            this.getAll();
        });
    }

    put(element) {
        this.setState({ data: null });
        this.apiServices.put(this.pluralTypeName, element, element.id).then(() => {
            this.getAll();
        });
    }

    submit(element) {
        this.setState({ ...this.state, isModalOpen: false });
        if (element.id) {
            this.put(element);
        } else {
            this.add(element);
        }
    }

    render() {
        return (
            <div style={{ height: "100%", width: "100%" }}>
                <PartsTable
                    columns={this.columns}
                    data={this.state.data}
                    onDeleteClick={(id) => this.delete(id)}
                    onEditClick={(item) => this.setState({ ...this.state, elementToEdit: item, isModalOpen: true })}
                    onAddClick={() => this.setState({ ...this.state, isModalOpen: true, elementToEdit: null })}
                />
                <PartFormModal
                    open={this.state.isModalOpen}
                    onClose={() => this.setState({ ...this.state, isModalOpen: false })}
                    columns={this.columns}
                    element={this.state.elementToEdit}
                    onSubmit={(element) => this.submit(element)}
                />
            </div>
        );
    }
}

export default TablePageBase;