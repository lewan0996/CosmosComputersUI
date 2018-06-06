import TablePageBase from "./TablePageBase";

class Processors extends TablePageBase{

    constructor(props) {
        super(props);
        this.state = {

        };

        this.columns = [
            {
                displayName: "Producer",
                key: "producer"
            },
            {
                displayName: "Model",
                key: "model"
            },
            {
                displayName: "Socket",
                key: "socket"
            },
            {
                displayName: "Price",
                key: "price"
            }    
        ];
    }    
}

export default Processors;