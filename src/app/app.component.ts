import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular project';
  fileName= 'ExcelSheet.xlsx';

  public userList = [

    {
    
    "id": 1,
    
    "name": "Avinash Kumar",
    
    "username": "Abhi",
    
    "email": "demo@gmail.com"
    
    },
    {
      "id": 2,
      
      "name": "Avinash Singh",
      
      "username": "ak",
      
      "email": "demo@gmail.com"
      
      },
      {
    
        "id": 3,
        
        "name": "Aakash Bhardwaj",
        
        "username": "akash",
        
        "email": "demo@gmail.com"
        
      },


    
    ]

    exportexcel(): void
    {
      /* pass here the table id */
      let element = document.getElementById('excel-table');
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
      /* save to file */  
      XLSX.writeFile(wb, this.fileName);
   
    }

}
