import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface UserResponse {
  name: string;
  readyToExplore: string;
  favoriteCharacter: string;
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  currentStep = 1;
  totalSteps = 3;
  showResults = false;
  
  userResponses: UserResponse = {
    name: '',
    readyToExplore: '',
    favoriteCharacter: ''
  };

  readyOptions = [
    { value: 'yes', label: '✅ Absolutely! Let\'s do this!', emoji: '🚀' },
    { value: 'maybe', label: '🤔 Maybe later, just exploring for now.', emoji: '🤔' },
    { value: 'no', label: '❌ Not interested (yet).', emoji: '⏳' }
  ];

  characterOptions = [
    { value: 'batman', label: 'Batman', description: 'Dark, smart, and always prepared.', emoji: '🦇', color: '#1a1a1a' },
    { value: 'flash', label: 'Flash', description: 'Fast, funny, and full of heart.', emoji: '⚡', color: '#dc143c' },
    { value: 'wonderwoman', label: 'Wonder Woman', description: 'Fierce, fearless, and fair.', emoji: '🛡️', color: '#b8860b' },
    { value: 'other', label: 'Other', description: 'I\'ve got my own favorite!', emoji: '🔥', color: '#4a90e2' }
  ];

  constructor(private router: Router) {}

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    } else {
      this.showResults = true;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  selectReady(option: string) {
    this.userResponses.readyToExplore = option;
    setTimeout(() => this.nextStep(), 500);
  }

  selectCharacter(character: string) {
    this.userResponses.favoriteCharacter = character;
    setTimeout(() => this.nextStep(), 500);
  }

  proceedToDC() {
    // Store user data in service or local storage if needed
    this.router.navigate(['/dcpage']);
  }

  restart() {
    this.currentStep = 1;
    this.showResults = false;
    this.userResponses = {
      name: '',
      readyToExplore: '',
      favoriteCharacter: ''
    };
  }

  getProgressPercentage(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  getSelectedCharacter() {
    return this.characterOptions.find(char => char.value === this.userResponses.favoriteCharacter);
  }

  getSelectedReady() {
    return this.readyOptions.find(opt => opt.value === this.userResponses.readyToExplore);
  }
}