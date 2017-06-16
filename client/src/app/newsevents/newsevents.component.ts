import { Component, OnInit } from '@angular/core';
import { Newsevents } from './newsevents';
import { NewseventsService } from './newsevents.service';
import { Router } from '@angular/router';
import * as AWS from 'aws-sdk';
import { Credentials, S3 }   from 'aws-sdk';

@Component({
  selector: 'app-newsevents',
  templateUrl: './newsevents.component.html',
  styleUrls: ['./newsevents.component.css'],
    providers: [NewseventsService]
})
export class NewseventsComponent implements OnInit {

    private readonly _awsConfig = {
    accessKeyId: "AKIAJQFEDF5JQLYSXQRQ",
    secretAccessKey: "UIbyKQ8sjyxgSsccbaZEbjcGkeXTtF/pms5GFmLA",
    s3BucketRegion: "us-east-1", // example: "us-west-2"
    s3BucketName: "spruceimage"    // example: "mycompany.testbucket"
  }
  private _awsCredentials: Credentials;
  private _s3ClientConfig: S3.ClientConfiguration;
  private _s3: S3;

  uploadStatus: string = "";
  expectEndpoint: string;
  actualEndpoint: string;

  post: Newsevents = new Newsevents();
  errorMessage = "";
 




  constructor(
    private newseventsService: NewseventsService,
    private router: Router
  ) { 
      this._awsCredentials = new Credentials(this._awsConfig.accessKeyId, this._awsConfig.secretAccessKey);
      this._s3ClientConfig = {
      credentials: this._awsCredentials,
      region: this._awsConfig.s3BucketRegion,
      sslEnabled: true
    };
    this._s3 = new S3(this._s3ClientConfig);

    // Set the expected and actual endpoints
    var isRegionUSEast :boolean = (this._awsConfig.s3BucketRegion).toLowerCase() == "us-east-1";
    var endpointHost :string = isRegionUSEast ? "s3" : "s3-" + this._awsConfig.s3BucketRegion
    this.expectEndpoint = endpointHost + ".amazonaws.com";
    this.actualEndpoint = this._s3.config.endpoint;
 }

  ngOnInit() {
  }
 
  onSubmit() {
       this.post.imagename=this.uploadStatus;
    this.newseventsService.createPost(this.post).subscribe(res => {
      console.log(res.id);
      this.post ="Successfully posted the news/event";
    }, err => {
      console.log(err);
      this.errorMessage = "An error saving the post";
    })
    
  }

 fileEvent(fileInput: any) {
    this.uploadStatus = "starting upload...";

    // get the file to upload
    let file: File = fileInput.target.files[0];
    console.log(file);

    // upload file to S3
    let putObjectRequest: S3.PutObjectRequest = {
      Key: 'categories/' + file.name,
      Body: file,
      Bucket: this._awsConfig.s3BucketName,
      ContentType: file.type,
      ServerSideEncryption: "AES256"
    };

    // use "that" to be able to reach component properties within the then/catch callback functions
    let that = this;

    // upload to S3
    this._s3.upload(putObjectRequest).promise()
      .then(function (response: S3.ManagedUpload.SendData) {
        that.uploadStatus =  response.Location;
        // alert("upload successful!");
      })
      .catch(function (err: Error) {
        var errMsg = "";
        errMsg += "upload failed.\n ";
        errMsg += "Error Message: " + err.message + "\n ";
        errMsg += "NOTE: an error message of 'Network Failure' may mean that you have the wrong region or the wrong bucket name.";
        that.uploadStatus = errMsg;
        // alert(errMsg);
      });
  }
}
