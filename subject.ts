SUBJECT IN ANGULAR

public notifySubject = new Subject();
sendNotification(data){
  this.notifySubject.next(data)
}
   
sendMessage(data){
  this.notifyService.sendNotification(data.value)
}

ngOnInit(){
   this.notifyService.notifySubject.subscribe(res=>{
   this.notificationMessage = res
})
}
