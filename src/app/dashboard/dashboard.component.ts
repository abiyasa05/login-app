import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  username = '';

  constructor(private router: Router, private authService: AuthService) { }

  onLogout(): void {
    // Lakukan logika logout di sini (misalnya, hapus data sesi, bersihkan cache, dll.)
    // Redirect ke halaman login setelah logout
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.username = this.authService.getUsername(); // Fetch the username from the authentication service
  }
}