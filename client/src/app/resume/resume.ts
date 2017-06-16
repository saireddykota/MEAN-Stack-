export class Resume{
    constructor(
        public id?: string,
        public firstname?: string,
        public lastname?: string,
        public company?: string,
        public email?: string,
        public address?: string,
        public city?: string,
        public zipcode?: number,
        public country?: string,
        public phone?: number,
        public state?: string,
        public resumepath?: string,
        public date?:Date
      ){
    }    
}