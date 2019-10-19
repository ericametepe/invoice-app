import {Component, OnInit} from '@angular/core';
import {MODE, ShareState, SharestateService} from '../core/sharestate.service';
import {InvoiceRepository} from '../model/invoice-model/invoice.repository';

@Component({
  selector: 'app-preview-file',
  templateUrl: './preview-file.component.html',
  styleUrls: ['./preview-file.component.css']
})
export class PreviewFileComponent implements OnInit {

  pdfFile: any;
  constructor(private shareService: SharestateService, private repository: InvoiceRepository) { }
  ngOnInit(): void {
    this.shareService.currentMessage.subscribe(data => {
      if (data.mode === MODE.PREVIEW && data.key !== 'undefined') {
         this.repository.generateFile(data.key)
          .subscribe((response) => {
            console.log(`<<<<<<< ${response} <<<<<<<<<<<<`);
            this.pdfFile = response;
        });
        console.log(`pdf ========== ${this.pdfFile}`);
      }
    });
  }

displayPDF(): void {
  // otherwise only Chrome works like it should
   const newBlob = new Blob([(this.pdfFile)], { type: 'application/pdf' });
// IE doesn't allow using a blob object directly as link href
// instead it is necessary to use msSaveOrOpenBlob
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
  window.navigator.msSaveOrOpenBlob(newBlob);
  return;
  }

// For other browsers:
// Create a link pointing to the ObjectURL containing the blob.
const downloadURL = URL.createObjectURL(newBlob);
window.open(downloadURL);
}

}


