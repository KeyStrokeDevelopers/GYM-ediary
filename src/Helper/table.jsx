import React, { Component } from 'react'
import MaterialTable from 'material-table'
import styled from 'styled-components'
import colors from '../Common/color'
import Workbook from 'react-xlsx-workbook'

const { BLUE_1, WHITE_1, TOMATO_2 } = colors

const Container = styled.div`
    max-width: 100%;
    padding: 50px;
    .MuiIconButton-colorInherit {
        color: ${TOMATO_2};
    }
    @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
    }

.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
}
`
const Button = styled.button`
    padding: 5px 20px;
    cursor: pointer;
    color: ${WHITE_1};
    background-color: ${BLUE_1};
    border-radius: 5px;
    font-size: 12px;
    font-weight: bolder;
`

export const ExportReactCSV = ({ csvData, fileName }) => {
    return <Workbook filename={`${fileName}.xlsx`} element={<Button>Excel</Button>}>
        <Workbook.Sheet data={csvData} name="Sheet A">
            <Workbook.Column label="Name" value="name" />
            <Workbook.Column label="Details" value="details" />
            <Workbook.Column label="Duration" value="duration" />
            <Workbook.Column label="Price" value="price" />
            <Workbook.Column label="Status" value="status" />
        </Workbook.Sheet>
    </Workbook>
}

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: this.props.columns,
            data: this.props.data
        }
    }

    updateRow = (newData, oldData) => {
        this.setState(prevState => {
            const data = [...prevState.data];
            data[data.indexOf(oldData)] = newData;
            return { ...prevState, data };
        });

    }

    deleteRow = (oldData) => {
        this.setState(prevState => {
            const data = [...prevState.data];
            data.splice(data.indexOf(oldData), 1);
            return { ...prevState, data };
        });

    }

    render() {
        const { columns, data } = this.state
        return (
            <Container>
                <MaterialTable
                    title={<ExportReactCSV csvData={data} fileName='package' />}
                    columns={columns}
                    data={data}
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        this.updateRow(newData, oldData);
                                    }
                                }, 600);
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    this.deleteRow(oldData);
                                }, 600);
                            }),
                    }}
                />
            </Container>);
    }
}

export default Table