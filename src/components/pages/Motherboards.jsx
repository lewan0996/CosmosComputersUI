import TablePageBase from "./TablePageBase";

class Motherboards extends TablePageBase {

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
                displayName: "Chipset",
                key: "chipset"
            },
            {
                displayName: "Cpu socket",
                key: "cpuSocket"
            },
            {
                displayName: "Memory type",
                key: "memoryType"
            },
            {
                displayName: "Price",
                key: "price"
            }
        ];
    }    
}

export default Motherboards;