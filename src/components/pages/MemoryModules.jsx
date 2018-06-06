import TablePageBase from "./TablePageBase";

class MemoryModules extends TablePageBase {

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
                displayName: "Memory amount (MB)",
                key: "memoryAmount"
            },
            {
                displayName: "Type",
                key: "type",
                type: "enum",
                options: [
                    { 
                        key: "DDR2", 
                        text: "DDR2", 
                        value: "DDR2" 
                    },
                    { 
                        key: "DDR3", 
                        text: "DDR3", 
                        value: "DDR3" 
                    },
                    { 
                        key: "DDR4", 
                        text: "DDR4", 
                        value: "DDR4" 
                    }
                ]
            },
            {
                displayName: "Price",
                key: "price"
            }
        ];
    }
}

export default MemoryModules;