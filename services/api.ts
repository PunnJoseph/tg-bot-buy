// // services/api.ts
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

// // General API handler function
// const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
//     const url = `${API_BASE_URL}${endpoint}`;
//     try {
//         const response = await fetch(url, options);

//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('API error:', error);
//         throw error;
//     }
// };

// // GET method for fetching data
// export const getRequest = (endpoint: string) => {
//     return apiFetch(endpoint, { method: 'GET' });
// };

// // POST method for sending data
// export const postRequest = (endpoint: string, body: object) => {
//     return apiFetch(endpoint, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     });
// };

// // PUT method for updating data
// export const putRequest = (endpoint: string, body: object) => {
//     return apiFetch(endpoint, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     });
// };

// // DELETE method for deleting data
// export const deleteRequest = (endpoint: string) => {
//     return apiFetch(endpoint, { method: 'DELETE' });
// };

// export const addTask = (task: object) => {
//     return postRequest('/api/tasks/tasks', task);
// };

// // Delete user by telegramId
// export const deleteUserByTelegramId = (telegramId: string) => {
//     return deleteRequest(`/api/users/users/${telegramId}`);
// };

// // Update user points and updates by telegramId
// export const updateUserPoints = (telegramId: string, points: number, updates: object) => {
//     return putRequest(`/api/users/users/${telegramId}/update-points`, { points, updates });
// };

// // Delete task by ID
// export const deleteTask = (taskId: string) => {
//     return deleteRequest(`/api/tasks/tasks/${taskId}`);
// };

// // Update task by ID
// export const updateTask = (taskId: string, updatedTask: object) => {
//     return putRequest(`/api/tasks/tasks/${taskId}`, updatedTask);
// }

// // Add a new user
// export const addUser = (user: object, referrerId?: string | null) => {

//     // If referrerId is provided, add it to the payload
//     const payload = { 
//         user: { ...user },   // Nest user inside 'user'
//         referrerId: referrerId || null // Ensure 'referrerId' is null if undefined
//       };

//     return postRequest('/api/users/users', payload);
// };

// // Get a single user by their Telegram ID
// export const getUser = (telegramId: string) => {
//     return getRequest(`/api/users/${telegramId}`);
// };

// // Update a user by their Telegram ID
// export const updateUser = (telegramId: string, userData: object) => {
//     return putRequest(`/api/users/users/${telegramId}`, userData);
// };

// // Get all users
// export const getUsers = () => {
//     return getRequest('/api/users/users');
// };

// // Get referred users for a specific user by their Telegram ID
// export const getReferredUsers = (telegramId: string) => {
//     return getRequest(`/api/users/users/${telegramId}/referred`);
// };

// // Get All-Time High Scores
// export const getAllTimeHighScores = (telegramId: string) => {
//     return getRequest(`/api/users/users/${telegramId}/all-time-scores`);
// };

// // Get Last Week's High Scores
// export const getLastWeekHighScores = (telegramId: string) => {
//     return getRequest(`/api/users/users/${telegramId}/last-week-scores`);
// };

// // Claim Daily Reward for a user by their Telegram ID
// export const claimDailyReward = (telegramId: string) => {
//     return postRequest(`/api/users/users/${telegramId}/daily-reward`, {});
// };
