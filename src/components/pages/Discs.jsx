import TablePageBase from "./TablePageBase";

class Discs extends TablePageBase {

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
                displayName: "Memory amount (GB)",
                key: "memoryAmount"
            },
            {
                displayName: "Type",
                key: "type",
                type: "enum",
                options: [
                    {
                        key: "HDD",
                        text: "HDD",
                        value: "HDD"
                    },
                    {
                        key: "SSD",
                        text: "SSD",
                        value: "SSD"
                    }
                ]
            },
            {
                displayName: "Connector",
                key: "connector",
                type: "enum",
                options: [
                    {
                        key: "SATA2",
                        text: "SATA2",
                        value: "SATA2"
                    },
                    {
                        key: "SATA3",
                        text: "SATA3",
                        value: "SATA3"
                    },
                    {
                        key: "M2",
                        text: "M2",
                        value: "M2"
                    },
                    {
                        key: "PCIe",
                        text: "PCIe",
                        value: "PCIe"
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

export default Discs;