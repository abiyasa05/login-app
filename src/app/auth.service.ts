import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Implement your login logic here
    // For example, check if the username and password are valid
    // If valid, set isAuthenticated to true and return true
    // If not valid, return false
    if (username === 'admin' && password === 'admin123') {
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  getUsername(): string {
    const username = 'admin'; // Replace with your implementation
    console.log(username); // Verify the value in the console
    return username;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}