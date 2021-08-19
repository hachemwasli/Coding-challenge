import { Paper } from '@material-ui/core';
import { DataGrid, GridValueGetterParams } from '@material-ui/data-grid';
import React from 'react';
import { InfectionHistory } from '../../interfaces/interfaces';
import { formatUTCDate } from '../../services/helper';


interface DataTableProps {
  data?: InfectionHistory[];
}

const columns = [
    {field: 'date', headerName: 'Date', width: 200, valueFormatter: (r: GridValueGetterParams) => formatUTCDate(new Date(r.row.date as string), 'dd.MM.yyyy HH:mm'),},
    {field: 'cases', headerName: 'Cases', width: 200},
  ]

export const DataTable = (props: DataTableProps) => {
  const { data } = props;
  
  return (
    <>
     <Paper elevation={3} style={{marginBottom:20, marginTop:40, marginLeft:10,marginRight:10, padding:15}}>
      <div style={{height: 750, width: '100%'}}>
      <DataGrid 
        autoPageSize={false}
        rows={data}
        columns={columns}
        pageSize={12}
        checkboxSelection
        disableColumnMenu
        disableSelectionOnClick
      />
       </div>
      </Paper>
    </>
  );
};
