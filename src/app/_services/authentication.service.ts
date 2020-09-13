import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;


    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(data: any) {
        return this.http.post<any>(`http://localhost:7086/api/login`, { data: data})
        .pipe(map(user => {
                if (user && user.userDetail) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    // localStorage.setItem('currentUser', JSON.stringify(user.userDetail));
                    this.currentUserSubject.next(user.userDetail);
                }
                // this.currentUserSubject.next(ab);
                return user.userDetail;
            }));
    }

   logout() {
        console.log('ssssssssssssssssss')
        this.currentUserSubject.next(null);

    }



    
    
}