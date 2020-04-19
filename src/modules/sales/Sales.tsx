import React from "react"
import { Typography } from "@material-ui/core"
import TreeList, { Editing, SearchPanel, Column, RequiredRule, Selection, Sorting, Scrolling, Paging, Pager, HeaderFilter, FilterRow } from "devextreme-react/tree-list"
import { sales } from "../../api/mock/sales"

function getOrderDay(rowData: any) {
    return (new Date(rowData.OrderDate)).getDay();
}

export const Sales = () => {
    const allowedPageSizes = [5, 10, 20];
    const onCellPrepared = (e: any) => {
        if (e.column.command === 'edit') {
            let addLink = e.cellElement.querySelector('.dx-link-add');

            if (addLink) {
                addLink.remove();
            }
        }
    }

    const calculateFilterExpression = (value: any, selectedFilterOperations: any, target: any) => {
        let column = 'date';
        if (target === 'headerFilter' && value === 'weekends') {
            return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
        }
        // return column.defaultCalculateFilterExpression.apply('date', arguments);
    }
    const orderHeaderFilter = (data: any) => {
        data.dataSource.postProcess = (results: any) => {
            results.push({
                text: 'Weekends',
                value: 'weekends'
            });
            return results;
        };
    }
    return (
        <Typography>
            <TreeList
                id="sales"
                dataSource={sales}
                showRowLines={true}
                showBorders={true}
                columnAutoWidth={true}
                keyExpr="id"
                onCellPrepared={onCellPrepared}
            >
                <HeaderFilter visible={true} />
                {/* <FilterRow applyFilter={{
                    key: 'auto',
                    name: 'Immediately'
                }}
                    visible={true}
                /> */}
                <Scrolling mode="standard" />
                <Paging
                    enabled={true}
                    defaultPageSize={5} />
                <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={allowedPageSizes}
                    showInfo={true} />
                <Sorting mode="multiple" />
                <Selection mode="single" />
                <SearchPanel visible={true} />
                <Editing
                    allowUpdating={true}
                    allowDeleting={true}
                    allowAdding={true}
                    mode="row"
                />
                <Column
                    caption={"Номер"}
                    visible={false}
                    dataField={"id"}>
                </Column>
                <Column
                    caption={"Название препарата"}
                    dataField={"drug.name"}>
                    <RequiredRule />
                </Column>
                <Column
                    caption={"Название аптеки"}
                    dataField={"pharmacy.name"}>
                    <RequiredRule />
                </Column>
                <Column
                    alignment="right"
                    dataType="date"
                    allowHeaderFiltering={false}
                    calculateFilterExpression={calculateFilterExpression}
                    caption={"Дата продажи"}
                    dataField={"date"}>
                    <RequiredRule />
                    {/* <HeaderFilter dataSource={orderHeaderFilter} /> */}
                </Column>
                <Column
                    allowHeaderFiltering={false}
                    caption={"Цена за ед."}
                    dataField={"price"}>
                    <RequiredRule />
                </Column>
                <Column
                    allowHeaderFiltering={false}
                    caption={"Кол-во"}
                    dataField={"quantity"}>
                    <RequiredRule />
                </Column>
                <Column
                    allowHeaderFiltering={false}
                    caption={"Сумма"}
                    dataField={"amount"}>
                    <RequiredRule />
                </Column>
                <Column
                    allowHeaderFiltering={false}
                    caption={"Дисконт"}
                    dataType="boolean"
                    dataField={"isDiscount"}>
                </Column>
                <Column
                    allowHeaderFiltering={false}
                    caption={"Удалена"}
                    dataType="boolean"
                    dataField={"isDeleted"}>
                </Column>
            </TreeList>
        </Typography>
    )
}
