import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isDropdownOpen: { [key: string]: boolean } = {};
  private closeDropdownTimeout: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) { // Close all dropdowns if menu is closed
      this.closeAllDropdowns();
    }
  }

  toggleDropdown(dropdownKey: string) {
    this.isDropdownOpen[dropdownKey] = !this.isDropdownOpen[dropdownKey];
    // Close other dropdowns
    for (const key in this.isDropdownOpen) {
      if (key !== dropdownKey) {
        this.isDropdownOpen[key] = false;
      }
    }
  }

  openDropdown(dropdownKey: string) {
    if (this.closeDropdownTimeout) {
      clearTimeout(this.closeDropdownTimeout);
    }
    this.isDropdownOpen[dropdownKey] = true;
  }

  closeDropdown(dropdownKey: string) {
    this.closeDropdownTimeout = setTimeout(() => {
      this.isDropdownOpen[dropdownKey] = false;
    }, 200); // Small delay to allow moving mouse to dropdown
  }

  closeAllDropdowns() {
    for (const key in this.isDropdownOpen) {
      this.isDropdownOpen[key] = false;
    }
  }

  closeAllDropdownsAndMenu() {
    this.closeAllDropdowns();
    if (this.isMenuOpen) {
      this.toggleMenu(); // Close mobile menu if open
    }
  }
}
