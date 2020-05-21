import { Injectable } from "@angular/core";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import * as _ from "lodash";
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

@Injectable({
  providedIn: "root"
})
export class ExcelService {
  workbook: XLSX.WorkBook;
  constructor() {}
  public exportAsExcelFile(json: any, excelFileName: string, tabs): void {
    var Sheets = {};
    var SheetNames: any[] = [];
    _.forEach(json, (sheetList, key) => {
      let worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(sheetList);
      SheetNames = [...SheetNames, tabs[key]["name"]];
      Sheets[tabs[key]["name"]] = worksheet;
    });
    this.workbook = { Sheets, SheetNames };
    const excelBuffer: any = XLSX.write(this.workbook, {
      bookType: "xlsx",
      type: "array"
    });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
