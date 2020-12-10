import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MobileService {

  detail = [];
  todoUpdtaed = new Subject();

  constructor(private http: HttpClient) { }

  submit(detail: string) {
    const details = {
      detail: detail
    }
    this.http.post<any>("http://localhost:3000/api/mobileUse", details)
      .subscribe(data => {
        this.detail.push(data);
        this.todoUpdtaed.next([...this.detail]);
        console.log(data);
      })
  }

  getTodo() {
    this.http.get<any>("http://localhost:3000/api/mobileUse/").subscribe(data => {
      this.detail = data;
      this.todoUpdtaed.next([...this.detail]);
    })
  }

  getTodoUpdateListener(): any {
    return this.todoUpdtaed.asObservable();
  }

  delete(id) {
    this.http.delete('http://localhost:3000/api/mobileUse/'+ id).subscribe(data => {
      const updatedTodo = this.detail.filter(details => details._id !== id);
      this.detail = updatedTodo;
      this.todoUpdtaed.next([...this.detail]);
    });
  }
}
