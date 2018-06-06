import TablePageBase from "./TablePageBase";

class PowerSupplies extends TablePageBase {

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
                displayName: "Modular",
                key: "isModular",
                type: "boolean"                
            },
            {
                displayName: "Power",
                key: "power"
            },
            {
                displayName: "Price",
                key: "price"
            }    
        ];
    }    
}

export default PowerSupplies;