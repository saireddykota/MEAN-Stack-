export class Job{
  constructor(

    public id?: string,
    public adminname?: string,
    public adminemail?: string,
    public jobtitle?: string,
    public jobdesc?: string,
    public experience?: string,
    public skillsneed?: string,
    public city?: string,
    public state?: string,
    public posteddate?: Date,
    public status?: Number
  ){

  }
}
