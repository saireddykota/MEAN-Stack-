export class Postjob {
    constructor(

        public id?: string,
        public jobtitle?: string,
        public skillsneed?: string,
        public city?: string,
        public state?: string,
        public jobdesc?: string,
        public experience?: string,
        public posteddate?: Date,
        public adminemail?: string,
        public status?: number
    ){}
}
