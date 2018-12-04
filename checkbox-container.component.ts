import { Component, OnInit, Input, ContentChild, AfterContentInit, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'tolvbots-checkbox-container',
  templateUrl: './checkbox-container.component.html',
  styleUrls: ['./checkbox-container.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef( ()=> CheckboxContainerComponent),
      multi:true
    }
  ]
})
export class CheckboxContainerComponent implements OnInit, AfterContentInit, ControlValueAccessor {

  @Input() name:string;
  @Input() label:string;
  @Input() switchType?:boolean = false;

  onTouched:any;
  onChange:any;
  input: any;
  value:any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value:any){
    this.value = value;
    this.onChange(this.value);
    this.onTouched(this.value);
  }

  ngAfterContentInit(){}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void;

}
