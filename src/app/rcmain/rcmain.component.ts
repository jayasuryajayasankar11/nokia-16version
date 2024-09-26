import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';



@Component({
  selector: 'app-rcmain',
  templateUrl: './rcmain.component.html',
  styleUrls: ['./rcmain.component.css']
})
export class RcmainComponent implements OnInit {
  materialForm: FormGroup;
  selectedFile: File | null = null;
  showData: boolean = false;
  uploadedData: any[] = [];
  loading: boolean = false;


  constructor(private fb: FormBuilder, private http: HttpClient, private dialog: MatDialog) {
    this.materialForm = this.fb.group({
      partCode: ['', Validators.required],
      description: ['', Validators.required],
      umo: ['', Validators.required],
      active_ordering: ['', Validators.required],
      component_usage: ['', Validators.required],
      type_of_component: ['', Validators.required],
      rohsStatus: ['', Validators.required],
      leadtime: ['', Validators.required],
      msdStatus: ['', Validators.required],
      bgvalue: ['', Validators.required],
      productGroup: ['', Validators.required],
      productFamily: ['', Validators.required],
      thLimit: ['', Validators.required],
      productName: ['', Validators.required],
      location: ['', Validators.required],
      compatibility: ['', Validators.required],
      unitPrice: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      // alert(`File selected: ${this.selectedFile.name}`);

    }
  }


  openDialog(message: string): void {
    this.dialog.open(AlertDialogComponent, {
      data: { message },
    });
  }


  onSave() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.loading = true;
      this.http.post('https://nokiabackend-9ef810487361.herokuapp.com/upload', formData).subscribe(
        response => {
          this.openDialog('File upload successful');
          console.log('File upload successful:', response);

          this.onClear();
          this.loading = false;
          // Clear the file after upload
        },
        error => {
          this.openDialog('File upload failed');
          console.error('File upload error:', error);
          this.onClear();
          this.loading = false;
        }
      );
    } else {
      this.openDialog('No file selected.');
    }
  }


  onSubmit() {
    if (this.materialForm.valid) {

      this.loading = true;
      this.http.post('https://nokiabackend-9ef810487361.herokuapp.com/saveData', this.materialForm.value).subscribe(
        response => {
          this.openDialog('Form data submitted successfully');
          console.log('Form data submitted successfully:', response);
          this.materialForm.reset(); // Reset the form after submission
          this.loading = false;
        },
        error => {
          this.openDialog('Form submission failed');
          console.error('Form submission error:', error);
          this.clearform();
          this.loading = false;
        }
      );
    } else {
      this.openDialog('Form is invalid.');
    }
  }


  clearform() {
    this.materialForm.reset();

  }

  onClear() {
    this.selectedFile = null;

    // Clear the file input element by setting its value to an empty string
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Reset the input file element
    }

  }



  downloadTemplate() {

    this.loading = true;

    this.http.get('https://nokiabackend-9ef810487361.herokuapp.com/sampleTemplate', { responseType: 'blob' }).subscribe(
      (response: Blob) => {
        // Create a URL for the file
        const blobUrl = window.URL.createObjectURL(response);

        // Create a link element
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'SampleTemplate.xlsx'; // Set the downloaded file name

        // Append the link to the body (required for some browsers)
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up by removing the link and revoking the URL
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);

        this.openDialog('Template downloaded successfully');
        this.loading = false;
      },
      error => {
        console.error('Error downloading template:', error);
        this.openDialog('Failed to download the template');
        this.loading = false;
      }
    );
  }



  // Method to load uploaded data
  loadUploadedData() {

    this.loading = true;
    this.http.get<any[]>('https://nokiabackend-9ef810487361.herokuapp.com/fetchData').subscribe(
      (data) => {
        this.uploadedData = data; // Store the uploaded data in the array
        this.showData = true;
        this.openDialog('Data loaded successfully');
        this.loading = false;
      },
      () => {
        this.openDialog('Failed to load data');
        this.loading = false;
      }
    );


  }
}
