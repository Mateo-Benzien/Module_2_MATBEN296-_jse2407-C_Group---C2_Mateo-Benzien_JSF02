// src/Store/filterStore.js
import { writable } from 'svelte/store';

const initialState = JSON.parse(localStorage.getItem('filterState')) || {
  searchTerm: '',
  selectedCategory: 'all',
  sortOrder: 'asc'
};

const store = writable(initialState);

store.subscribe(state => {
  localStorage.setItem('filterState', JSON.stringify(state));
});

export const filterStore = store;
