import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import etudiant from './etudiant2';
import { useEffect } from 'react';
import { Switch } from './switch';

const columns = [
  { field: 'id', headerName: 'CIN', width: 70 },
  { field: 'nom', headerName: 'Nom', width: 130 },
  { field: 'prenom', headerName: 'Prenom', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'classe', headerName: 'Classe', width: 130 },
  { field: 'td', headerName: 'TD', width: 130 },
  { field: 'tp', headerName: 'TP', width: 130 },
];

const rows = etudiant;

export default function DataTable() {
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
      />
    </div>
  );
}
