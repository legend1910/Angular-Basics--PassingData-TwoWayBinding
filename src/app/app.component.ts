import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 AlertMessage="";
 ShowValue="";
 EmployeName="First Name";
 canEnableButton=false;
constructor()
{
  setTimeout(()=>{
    this.canEnableButton=true;
  }, 5000)
}

 OnAddEmployee()
 {
   this.AlertMessage="The Employee has been created" + this.EmployeName;
 }
 OnNewEmployeeAdd(event:Event)
 {
   console.log(event);
   // you can see the emitted data in the console and the target is of type html element
   // in the console whenever you stroke a key in the input you can see the log where the emitted data is logged and in the data->target->value you can see what value you typed
   // We are explicitly casting mention  by <HTMLInputElement>
   this.ShowValue= (<HTMLInputElement>event.target).value;
 }
  
}
