import { Component, OnInit } from '@angular/core';
import { Resume } from './resume';
import { ResumeService } from './resume.service';
import { Router } from '@angular/router';
import * as AWS from 'aws-sdk';
import { Credentials, S3 }   from 'aws-sdk';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [ResumeService]
})
export class ResumeComponent  {


    private readonly _awsConfig = {
    accessKeyId: "AKIAIBTXPYF35WUKKIIQ",
    secretAccessKey: "gKfhyoWA0DJs+x/wUaSHSmfAIpusZZO6l7G3bkeX",
    s3BucketRegion: "us-east-1", // example: "us-west-2"
    s3BucketName: "spruceimage"    // example: "mycompany.testbucket"
  }
  private _awsCredentials: Credentials;
  private _s3ClientConfig: S3.ClientConfiguration;
  private _s3: S3;

  uploadStatus: string = "(no upload yet)";
  expectEndpoint: string;
  actualEndpoint: string;

  post: Resume = new Resume();
  errorMessage = "";
  successMessage="";
 




  constructor(
    private resumeService: ResumeService,
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
       this.post.resumepath=this.uploadStatus;
      
      this.resumeService.createPost(this.post).subscribe(res => {
      console.log(res.id);
      
      let date = new Date();
      console.log(date);
      
      this.post ="Successfully posted the news/event";
      this.successMessage ="Resume successfully submitted";
      // console.log(this.successMessage);
      
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
  

    // upload to S3
    this._s3.upload(putObjectRequest).promise()
      .then(function (response: S3.ManagedUpload.SendData) {
        this.uploadStatus =  response.Location;
        // alert("upload successful!");
      })
      .catch(function (err: Error) {
        var errMsg = "";
        errMsg += "upload failed.\n ";
        errMsg += "Error Message: " + err.message + "\n ";
        errMsg += "NOTE: an error message of 'Network Failure' may mean that you have the wrong region or the wrong bucket name.";
        this.uploadStatus = errMsg;
        // alert(errMsg);
      });
  }
}