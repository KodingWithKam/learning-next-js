'use server';

export async function createEntry() {
  // Simulate adding an entry to a database
  console.log('Creating new entry');
  setTimeout(() => {
    // runs after 2 seconds
    console.log('Successfully created new entry!');
  }, 2000);
  return;
}
