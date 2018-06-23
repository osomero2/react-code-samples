class FunctionToMapUnknownArrays extends React.Component {
    constructor(props) {
        super(props)
    }

    getItems() {
        const array = [
            {
                nameOne: [
                    'nameOneArrayItem1',
                    'nameOneArrayItem2'
                ]
            },
            {
                nameTwo: [
                    'nameTwoArrayItem1',
                    'nameTwoArrayItem2'
                ]
            },
            {
                nameThree: [
                    'nameThreeArrayItem1',
                    'nameThreeArrayItem2'
                ]
            }
        ];

        return array.map((object,i) => {
            let keys = Object.keys(object);
            return object[keys].map(text => {
                return (
                    <li key={text + i}>
                        {text}
                    </li>
                )
            })
        })
    }

    render() {
        return (
            <div>
                {this.getItems()}
            </div>
        )
    }
}

ReactDOM.render(<FunctionToMapUnknownArrays/>, document.querySelector("#app"));