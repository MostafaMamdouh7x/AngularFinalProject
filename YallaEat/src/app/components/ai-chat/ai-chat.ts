import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat.html',
  styleUrls: ['./ai-chat.css']
})
export class AiChat{
  isOpen = false;
  userInput = '';
  
  restaurantMenu = {
    mainMeals: [
      { name: 'Grilled Chicken', price: '120 EGP' },
      { name: 'Beef Steak', price: '180 EGP' },
      { name: 'YallaEat Burger', price: '95 EGP' }
    ],
    appetizers: [
      { name: 'French Fries', price: '35 EGP' },
      { name: 'Mozzarella Sticks', price: '50 EGP' },
      { name: 'Caesar Salad', price: '45 EGP' }
    ],
    desserts: [
      { name: 'Chocolate Cake', price: '60 EGP' },
      { name: 'Cheesecake', price: '65 EGP' },
      { name: 'Ice Cream', price: '30 EGP' }
    ]
  };

  messages = [
    { sender: 'ai', text: 'Welcome to YallaEat! I am your AI assistant 🤖. Ask me about our menu, main meals, appetizers, desserts, or tell me what you like so I can recommend a dish for you!' }
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const userText = this.userInput;
    this.messages.push({ sender: 'user', text: userText });
    this.userInput = '';

    let aiReply = "I'm here to help! You can ask about our full menu, main meals, appetizers, or desserts.";
    const lower = userText.toLowerCase();

    if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
      aiReply = 'Hello! Welcome to YallaEat. How can I help you today? 🤖';
    }
    else if (lower.includes('menu') || lower.includes('all')) {
      aiReply = 'Here is our menu:\n' +
        '• Main Meals: ' + this.restaurantMenu.mainMeals.map(m => `${m.name} (${m.price})`).join(', ') + '\n' +
        '• Appetizers: ' + this.restaurantMenu.appetizers.map(a => `${a.name} (${a.price})`).join(', ') + '\n' +
        '• Desserts: ' + this.restaurantMenu.desserts.map(d => `${d.name} (${d.price})`).join(', ');
    } 
    else if (lower.includes('main') || lower.includes('meal') || lower.includes('food')) {
      aiReply = 'Our Main Meals:\n' + this.restaurantMenu.mainMeals.map(m => `▫️ ${m.name} - ${m.price}`).join('\n');
    } 
    else if (lower.includes('appetizer') || lower.includes('starter')) {
      aiReply = 'Our Appetizers:\n' + this.restaurantMenu.appetizers.map(a => `▫️ ${a.name} - ${a.price}`).join('\n');
    } 
    else if (lower.includes('dessert') || lower.includes('sweet') || lower.includes('cake')) {
      aiReply = 'Our Desserts:\n' + this.restaurantMenu.desserts.map(d => `▫️ ${d.name} - ${d.price}`).join('\n');
    } 
    else if (lower.includes('delivery') || lower.includes('time')) {
      aiReply = 'Delivery is super fast! Your food arrives hot within 30 minutes 🚀';
    } 
    else if (lower.includes('book') || lower.includes('order') || lower.includes('reserve')) {
      aiReply = 'To book or order, you can contact us directly at our phone number: +20 123 456 7890 or via email: info@yallaeat.com, and we will gladly assist you!';
    }
    else if (lower.includes('like') || lower.includes('love') || lower.includes('prefer') || lower.includes('favorite') || lower.includes('want')) {
      if (lower.includes('chicken') || lower.includes('meat') || lower.includes('beef') || lower.includes('burger')) {
        aiReply = 'Based on what you like, I highly recommend trying our Juicy Beef Steak or YallaEat Burger from our main meals! 🍔🥩';
      } else if (lower.includes('sweet') || lower.includes('chocolate') || lower.includes('cake') || lower.includes('ice cream')) {
        aiReply = 'Since you have a sweet tooth, you will love our Chocolate Cake or Strawberry Cheesecake! 🍰🍫';
      } else {
        aiReply = 'Based on your preference, I recommend trying our Grilled Chicken or Caesar Salad! 🥗';
      }
    }

    this.messages.push({ sender: 'ai', text: aiReply });
  }
}