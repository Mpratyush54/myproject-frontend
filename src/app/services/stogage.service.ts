import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'
@Injectable({
  providedIn: 'root'
})
export class StogageService {

  constructor() { }
  Student_insert(student_username ,student_email,student_name,student_query_token,student_class, query_token2 ){
localStorage.removeItem('data')
localStorage.removeItem('username')
const new_data = { student_username : student_username , student_email:student_email ,student_name:student_name,student_query_token:student_query_token,student_class:student_class , student_query_token2 :query_token2}
// 
// var vfdvbxvc =CryptoJS.AES.encrypt(JSON.stringify(new_data), student_username).toString();
// var vfdvbxvc =encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(new_data) , student_username)).toString(); 
var vfdvbxvc = CryptoJS.AES.encrypt(JSON.stringify(new_data), student_username).toString();

localStorage.setItem('data' , vfdvbxvc)
localStorage.setItem('username' , student_username)

  }
  student_refgestration( value ){
var datas = {regestration:value}
    const data = localStorage.getItem('data')
    const key = localStorage.getItem('username')
    var deData = CryptoJS.AES.decrypt(data , key)
    
    var json =JSON.parse(decodeURIComponent(deData.toString(CryptoJS.enc.Utf8)))
    const json2 = {...json , ...datas}
        // 
   
    var vfdvbxvc = CryptoJS.AES.encrypt(JSON.stringify(json2), key).toString();
    
    localStorage.setItem('data' , vfdvbxvc)
    // localStorage.setItem('username' , student_username)
    
      }
    
student_get(field_name){
const data = localStorage.getItem('data')
const key = localStorage.getItem('username')
var deData = CryptoJS.AES.decrypt(data , key)

var json =JSON.parse(decodeURIComponent(deData.toString(CryptoJS.enc.Utf8)))


return json[field_name]
}



   teacher_insert(teacher_username ,teacher_email,teacher_name,teacher_query_token,teacher_class , query_token2 ){
localStorage.removeItem('data')
localStorage.removeItem('username')


const new_data = { teacher_username : teacher_username , teacher_email:teacher_email ,teacher_name:teacher_name,teacher_query_token:teacher_query_token,teacher_class:teacher_class , teacher_query_token2 :query_token2}

// var vfdvbxvc =encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(new_data) , teacher_username)).toString(); 
var vfdvbxvc = CryptoJS.AES.encrypt(JSON.stringify(new_data), teacher_username).toString();


localStorage.setItem('data' , vfdvbxvc)
localStorage.setItem('username' , teacher_username)

  }
  teacher_get(field_name){
    
    const data = localStorage.getItem('data')
    const key = localStorage.getItem('username')
    var deData = CryptoJS.AES.decrypt(data , key)
    
    var json =JSON.parse(decodeURIComponent(deData.toString(CryptoJS.enc.Utf8)))
    
    
    return json[field_name]
    }
}
