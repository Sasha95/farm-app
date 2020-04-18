import React from "react"
import { Typography } from "@material-ui/core"
import { employees } from "../../resources/data";
import { TreeList, Editing, Column, RequiredRule, Lookup } from 'devextreme-react/tree-list';

const expandedRowKeys = [1, 2, 3, 4, 5];

const headDataSource = {
    store: employees,
    sort: 'Full_Name'
};

export const Sales = () => {
    const onCellPrepared = (e: any) => {
        if (e.column.command === 'edit') {
            let addLink = e.cellElement.querySelector('.dx-link-add');

            if (addLink) {
                addLink.remove();
            }
        }
    }

    const onEditorPreparing = (e: any) => {
        if (e.dataField === 'Head_ID' && e.row.data.ID === 1) {
            e.cancel = true;
        }
    }
    const onInitNewRow = (e: any) => {
        e.data.Head_ID = 1;
    }

    return (
        <Typography>
            <div id="tree-list-demo">
                <TreeList
                    id="employees"
                    dataSource={employees}
                    showRowLines={true}
                    showBorders={true}
                    columnAutoWidth={true}
                    defaultExpandedRowKeys={expandedRowKeys}
                    keyExpr="ID"
                    parentIdExpr="Head_ID"
                    onCellPrepared={onCellPrepared}
                    onEditorPreparing={onEditorPreparing}
                    onInitNewRow={onInitNewRow}
                >
                    <Editing
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true}
                        mode="row" />
                    <Column
                        dataField="Full_Name">
                        <RequiredRule />
                    </Column>
                    <Column
                        dataField="Head_ID"
                        caption="Head">
                        <Lookup
                            dataSource={headDataSource}
                            valueExpr="ID"
                            displayExpr="Full_Name" />
                        <RequiredRule />
                    </Column>
                    <Column
                        dataField="Title"
                        caption="Position">
                        <RequiredRule />
                    </Column>
                    <Column
                        width={120}
                        dataField="Hire_Date"
                        dataType="date">
                        <RequiredRule />
                    </Column>
                </TreeList>
            </div>
        </Typography>
    )
}
