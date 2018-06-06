import TablePageBase from "./TablePageBase";

class GraphicsCards extends TablePageBase {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.columns = [
            {
                displayName: "Chip producer",
                key: "chipProducer"
            },
            {
                displayName: "Vendor",
                key: "vendor"
            },
            {
                displayName: "Model",
                key: "model"
            },
            {
                displayName: "Version",
                key: "version"
            },
            {
                displayName: "Price",
                key: "price"
            }
        ];
    }
}

export default GraphicsCards;