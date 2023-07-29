SUBJECT IN ANGULAR

1. create service file (notificationService)
   import subject from rxjs
   create subject : public notifySubject = new Subject();
   create function : sendNotification(data){
						this.notifySubject.next(data)
					}
   
2. pass the data in component(ex contact component in input tag)
   import notificationService
   inject in constructor(create instance of service)
   create one input in html with refrence variable
   create button with click event, pass reference variable to event
   click event : sendMessage(data){
					this.notifyService.sendNotification(data.value)
					}

3. read the data in component(ex notification component)
   import notificationService
   inject in constructor(create instance of service)
   create variable to read data (notificationMessage:string)
   ngOnInit(){
   this.notifyService.notifySubject.subscribe(res=>{
	this.notificationMessage = res
   })
   }
