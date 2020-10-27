import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { base64ToFile, ImageCroppedEvent } from 'ngx-image-cropper';
import { first, take } from 'rxjs/operators';
import { StoreImagesService } from '../services/store-images.service';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {
  @Input() folderPath: string;
  @Output() uploadUrl: EventEmitter<string> = new EventEmitter();
  imageChangedEvent: any = '';
  croppedImage: any = '';
  file: Blob;

  uploadPossible: boolean;

  constructor(
    private storeImageService: StoreImagesService,
    ) { }

  ngOnInit(): void {
    this.uploadPossible = true;
  }

  openInput(): void {
    document.getElementById('uploadButton').click();
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log(event);
    console.log('type', typeof(event));
    this.croppedImage = event.base64;
    this.file = base64ToFile(this.croppedImage);
    this.uploadPossible = false;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

  startUpload(): void {
    this.storeImageService.startBlobUpload(this.file, this.folderPath)
    .pipe(take(1))
    .subscribe(
      url => {
        this.uploadUrl.emit(url);
      }
    );
    // this.storeImageService.startCropperUpload(this.croppedImage);
  }
}
