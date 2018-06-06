import TablePageBase from "./TablePageBase";

class Coolers extends TablePageBase {

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
                displayName: "Type",
                key: "type",
                type: "enum",
                options: [
                    { 
                        key: "Air", 
                        text: "Air", 
                        value: "Air" 
                    },
                    { 
                        key: "AiO", 
                        text: "AiO", 
                        value: "AiO" 
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

export default Coolers;